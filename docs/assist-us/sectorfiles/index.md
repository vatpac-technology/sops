---
title: Sector Files
---

--8<-- "includes/abbreviations.md"

# Sector Files

!!! warning
    These Sector File SOPs are still a work in progress, and does not contain complete information. 

    Typically as new releases are pushed to the Client, these SOPs will be updated with that information.

## Overview

VATNZ Controller Client data is managed through a Sector File Generator app and a dedicated standalone SQL database; allowing for multiple outputs from a single data source. 

The Controller Data is updated in line with the AIRAC cycles, however the ANR is only updated every two cycles.

## Features 

The SFG app can perform the following functions:

*  One-click download **all** data from the Air Navigation Register, and input into `nzsectorfiles.sql`,
*  Allow for the importing of manual airspace definitions, such as Enroute and TMAs,
*  Allow for the conversion of various formats. For example from eAIP draw format to Sector File/Sector Line/vatSys Airspace Map and Volume/vatSpy boundary,
*  Allow for the merging of airspace, through eAIP definitions (albeit with some limitations),
*  Allow for the manual import and mapping of different procedures (STARs, SIDs, VFR arrival/departures, GNSS and RNP approaches),
*  Conversion between different coordinate types (SCT/eAIP/Dec. Degrees/ISO Deg, DegMins, DegMinsSecs),
*  Various vatSpy utilities.

The SFG can export to both vatSys and EuroScope. The App runs various export routines that produce the various necessary outputs - `XML` for vatSys and `SCT2 / ESE` for EuroScope.


