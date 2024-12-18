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

- Fork and Clone the [:fontawesome-brands-github:{: .github } -  **SOPs Project**](https://github.com/vatpac-technology/sops){target=new} - [Guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo){target=new}.
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
OR
```
python -m mkdocs serve
```

- You'll see the command line performing some magic, eventually displaying `Serving on http://127.0.0.1:8000`. Open up your web browser, and navigate to that address.

## Common Setup Issues
### 'pip' Term not Recognised
When running the `pip install -r requirements.txt` command, you may receive an error preventing any packages from being installed. Check that Python is installed and accessible by typing `python` into a VS Code terminal. If necessary, the Windows Store will open and allow you to install the correct Python package. Restart VS Code before continuing.

### Script installed 'Not on PATH'
After running the `pip install -r requirements.txt` command, some packages may produce yellow warnings, such as below:

!!! example ""
    *"WARNING: The script watchmedo.exe is installed in 'C:\Users\username\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\LocalCache\local-packages\Python310\Scripts' which is not on PATH. Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location."*

Python is recognised but some scripts have been installed beyond the scope of the software.  Update your Windows *PATH* variable to include the path indicated in the error.  

Follow the steps [here](https://www.educative.io/answers/how-to-add-python-to-path-variable-in-windows){target=new} to update your Windows PATH variable. Restart VS Code before continuing.

## Using MkDocs
MkDocs is the underlying tool that we use for our SOPs. It takes in Markdown files, and converts them to a static website on each save, which is then pumped into your browser upon an automatic reload.

We can also run `mkdocs build` to build a export the core HTML/CSS/JS that can be uploaded via FTP to the web.

!!! info
    You won't need to run the `mkdocs build` command. This is automatically run as a part of the GitHub deployment workflow. **If you do run this command**, please make sure you delete the `site` folder that is generated in your base directory before committing your code.

Sometimes MkDocs wont like your changes, and may escape from the running `serve` instance. This is usually as a result of a broken `.pages` file. Just undo your changes and try again. 