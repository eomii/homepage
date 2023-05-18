{ pkgs, ... }:
{
  # Default hooks
  trailing-whitespace-fixer = {
    enable = true;
    name = "trailing-whitespace";
    description = "Remove trailing whitespace";
    entry = "${pkgs.python311Packages.pre-commit-hooks}/bin/trailing-whitespace-fixer";
    excludes = [ "^patches/" ];
    types = [ "text" ];
  };
  end-of-file-fixer = {
    enable = true;
    name = "end-of-file-fixer";
    description = "Remove trailing whitespace";
    entry = "${pkgs.python311Packages.pre-commit-hooks}/bin/end-of-file-fixer";
    excludes = [ "^patches/" "png" "svg" ];
    types = [ "text" ];
  };
  fix-byte-order-marker = {
    enable = true;
    name = "fix-byte-order-marker";
    entry = "${pkgs.python311Packages.pre-commit-hooks}/bin/fix-byte-order-marker";
    types = [ "text" ];
  };
  mixed-line-ending = {
    enable = true;
    name = "mixed-line-ending";
    entry = "${pkgs.python311Packages.pre-commit-hooks}/bin/mixed-line-ending";
    excludes = [ "png" ];
    types = [ "text" ];
  };
  check-case-conflict = {
    enable = true;
    name = "check-case-conflict";
    entry = "${pkgs.python311Packages.pre-commit-hooks}/bin/check-case-conflict";
    types = [ "text" ];
  };
  detect-private-key = {
    enable = true;
    name = "detect-private-key";
    entry = "${pkgs.python311Packages.pre-commit-hooks}/bin/detect-private-key";
    types = [ "text" ];
  };

  # YAML
  yamllint = {
    enable = true;
    excludes = [ "^styles/" ];
  };

  # Nix
  nixpkgs-fmt.enable = true;

  # Markdown
  markdownlint = {
    enable = true;
    excludes = [ "^(docs/reference/|docs/rules/|styles/)" ];
    types = [ "markdown" ];
  };

  # Vale
  # vale = {
  #   enable = true;
  #   name = "vale";
  #   entry = "${pkgs.vale}/bin/vale";
  #   excludes = [ "^styles/" ];
  #   types = [ "markdown" ];
  # };
}
