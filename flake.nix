{
  inputs.dream2nix.url = "github:nix-community/dream2nix";
  inputs.nixpkgs.url = "github:nixos/nixpkgs";
  inputs.pre-commit-hooks.url = "github:cachix/pre-commit-hooks.nix";
  outputs =
    { self
    , dream2nix
    , nixpkgs
    , pre-commit-hooks
    } @ inputs:
    let
      # nixpkgs = dream2nix.inputs.nixpkgs;
      l = nixpkgs.lib // builtins;

      systems = [ "x86_64-linux" ];
      forAllSystems = f:
        l.genAttrs systems (
          system:
          f system (nixpkgs.legacyPackages.${system})
        );

      d2n-flake = inputs.dream2nix.lib.makeFlakeOutputs {
        inherit systems;
        config.projectRoot = ./.;
        source = ./.;
        projects = ./projects.toml;
      };
    in
    dream2nix.lib.dlib.mergeFlakes [
      d2n-flake
      {
        devShells = forAllSystems (system: pkgs: (
          l.optionalAttrs (d2n-flake ? devShells.${system}.default.overrideAttrs) {
            default = d2n-flake.devShells.${system}.default.overrideAttrs (old: {
              inherit (self.checks.${system}.pre-commit-check) shellHook;
              buildInputs = old.buildInputs ++ [
                # Add additional packages for the devShell here.
                pkgs.yarn
                pkgs.pre-commit
              ];
            });
          }

        ));
      }
      {
        checks = forAllSystems (system: pkgs: ({
          pre-commit-check = pre-commit-hooks.lib.${system}.run {
            src = ./.;
            hooks = import ./pre-commit-hooks.nix { inherit pkgs; };
          };
        }));
      }
    ];
}
