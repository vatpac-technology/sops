---
title: Set Up
---

--8<-- "includes/abbreviations.md"

## Introduction

The Controller Client data is managed through GitHub repositories under the vatnz-dev organization. If you require access to the vatnz-dev organization, let the Operations Director know.

There are a number of repositories of note:

* [**ais-data-manager**](https://github.com/vatnz-dev/ais-data-manager){target=new} - Contains the most recent version of `nzsectorfiles.sql`,
* [**auckland-radio-dataset**](https://github.com/vatnz-dev/auckland-radio-dataset){target=new} - Development repo of the Auckland Radio Dataset,
* [**new-zealand-dataset**](https://github.com/vatnz-dev/new-zealand-dataset){target=new} - Development repo of the New Zealand Domestic Dataset,
* [**SectorFiles**](https://github.com/vatnz-dev/SectorFiles){target=new} - Release repo of our EuroScope releases.
* [**vrpsForLittleNavMap**](https://github.com/vatnz-dev/vrpsForLittleNavMap) - Release repo of our LittleNavMap VRPs.

## Requirements

The SFG app should run on any PC running Windows 7, 10 or 11. The system must have at least .Net Framework 4 installed.

Prior to installing the SFG app, you will need to set up the following:

*  [**XAMPP**](https://www.apachefriends.org/index.html){target=new} - XAMPP is an Apache distribution that contains a MySQL server, replicating a live server on your local machine.
*  [**GitHub Desktop**](https://desktop.github.com/){target=new} - Needed in order to manage the EuroScope releases, vatSys Datasets and database.

When setting up XAMPP and MySQL, you have the option to set a username and password for the root user. If you set your own, you're able to set this under `Export > User Options`.

### Updating of the Database Local Repository

The SFG has the ability to import an updated version of the SFG database from a GitHub repository, as well as the ability to export the database ready for committal to the AIS Data Manager repo.

This feature requires you to set the `mysqld.exe` locations in the User Options dialog, found on the Export page. These can typically be found in your XAMPP install directory under `xampp\mysql\bin`. You will also have to set the location of the GitHub repository on your machine.

!!! warning 
    While other local development stacks, such as WAMP, also have the capability for this function; the security functions of these stacks prohibit this feature from working properly. Therefore, it is suggested to only use XAMPP for your local stack.

!!! hint
    You can select to export or load the `event_nzsectorfiles` database by selecting the `Event Database` toggle at the bottom of the `Export` window.

#### Loading the Database from a GitHub Repo

1. In your GitHub Desktop client, fetch the latest version of the `ais-data-manager` repository
2. On the `Export` page of the SFG, click on ++"Load Database"++
3. You will be warned of which database you are about to replace. Follow the prompt

#### Exporting the Database, and updating the GitHub Repo
1. On the `Export` page of the SFG, click on ++"Update Database Repo"++
2. In your GitHub Desktop client, review the differences. If these look OK, the add your commit summary and description if applicable
3. Commit your changes
4. Inform the other uses of the database that an update has been made

!!! attention
    You should update the database repository whenever changes have been made to the database.