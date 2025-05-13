# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "unstable"; # or "stable-24.05"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.docker
    pkgs.nodejs_22
    pkgs.openssh
    pkgs.mkcert
    pkgs.pnpm
    pkgs.fish
  ];

  # Sets environment variables in the workspace
  env = {
    PORT = "5173";
  };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "esbenp.prettier-vscode"
      "dbaeumer.vscode-eslint"
      "heybourn.headwind"
      "vincaslt.highlight-matching-tag"
      "ecmel.vscode-html-css"
      "bierner.markdown-mermaid"
      "ms-playwright.playwright"
      "formulahendry.auto-close-tag"
      "formulahendry.auto-rename-tag"
      "usernamehw.errorlens"
      "bradlc.vscode-tailwindcss"
      "jock.svg"
      "Gruntfuggly.todo-tree"
      "mechatroner.rainbow-csv"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
          # and show it in IDX's web preview panel
          command = ["pnpm" "run" "dev"];
          manager = "web";
          env = {
            # Environment variables to set for your server
            PORT = "$PORT";
          };
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # install JS dependencies from NPM
        pnpm-install = "pnpm install";
        default.openFiles = [ "README.md" ];
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
        # run-dev = "pnpm run dev";
      };
    };
  };
}
