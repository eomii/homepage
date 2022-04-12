The eomii.org homepage
======================

This repository contains the website hosted at `<https://eomii.org>`_.

Setup
-----

Install the ``pre-commit`` hooks::

   pre-commit install

Verify that all tools pass without failure::

   pre-commit run --all-files

Rebuilding
----------

To work on the ``scss`` files, set up ``dart-sass`` to watch the ``scss`` and
``css`` files::

   sass --no-source-map --watch src/scss/index.css docs/css/index.css
