---
  title: Setting Up
---

--8<-- "includes/abbreviations.md"

We'll kick off by setting up your local development environment. 

!!! important
    If you have any questions about setting up your development environment for these SOPs, or you get stuck - feel free to reach out to the Operations Team.

## Requirements

To contribute, you'll need the following -

  * A basic code editor or IDE. 
    * We recommend [VS Code](https://code.visualstudio.com/){target=blank} with a Markdown helper plugin.
  * A GitHub account, and a local Git environment - [GitHub Quickstart Guide](https://docs.github.com/en/get-started/quickstart){target=blank}.
  * Python - [Install Python](https://www.python.org/downloads/){target=blank}

## Lets get cracking!

- Fork and Clone the [:fontawesome-brands-github:{: .github } -  **SOPs Project**](https://github.com/vatnz-dev/sops){target=new} - [Guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo){target=new}.
- Install the following Python packages: `mkdocs-material, mkdocs-git-revision-date-localized-plugin, mkdocs-awesome-pages-plugin` and `mkdocs-redirects`.

!!! info "Easy Python Package Installation"
    These packages can be installed easily through a single command.

    ``` python
      pip install -r requirements.txt
    ```

    !!! error ""
        You'll still need to ensure you have Python installed first, as these use **pip** - a Python package installer.

- Once you've installed the requirements, open a command line terminal, `cd` into the cloned repository and start the mkdocs service:

```
mkdocs serve
```

- You'll see the command line performing some magic, eventually displaying `Serving on http://127.0.0.1:8000`. Open up your web browser, and navigate to that address.

## Using MkDocs

MkDocs is the underlying tool that we use for our SOPs. It takes in Markdown files, and converts them to a static website on each save, which is then pumped into your browser upon an automatic reload.

We can also run `mkdocs build` to build a export the core HTML/CSS/JS that can be uploaded via FTP to the web.

!!! info
    You won't need to run the `mkdocs build` command. This is automatically run as a part of the GitHub deployment workflow. **If you do run this command**, please make sure you delete the `site` folder that is generated in your base directory before committing your code.

Sometimes MkDocs wont like your changes, and may escape from the running `serve` instance. This is usually as a result of a broken `.pages` file. Just undo your changes and try again. 