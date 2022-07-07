---
title: Overview
---

--8<-- "includes/abbreviations.md"

!!! warning
    Procedures are **not** automatically pulled from the ANR, due to incomplete data and differing formats. These must be updated in line with the ANR.

The Procedure Editor provides an easy to use interface for creating and editing procedures for the aerodromes contained within the database.

The Procedure Editor covers the following procedures -

* SIDs
* STARs
* VFR arrivals and departures
* Helicopter-specifc procedures (not used)
* Approaches (RNP, RNP-AR, LOC and VOR)

<figure markdown> 
  ![Procedure Editor Main Screen](assets/../../assets/ProcEdMainScreen.png){ width="600" }
</figure>

## How does it work?

The ProcEd allows the user to create procedures for any of the aerodromes contained within the `contl_apt` or `uncontl_apt` tables. Aerodromes not appearing in either of these two tables will not be able to have procedures created for them - regardless of whether or not they appear in other tables, such as `ap_aids`.

After an aerodrome has been added to either of the required tables, it will show under the `Airport ICAO` dropdown when ++"New Procedure"++ is clicked. The app will automatically pull in the aerodrome's runways, as listed in the `runway` table.

For procedures that have transitions (SIDs, STARs and approaches), you are required to add the base procedure, and then the various transition routings. This is further defined in the various procedure sections.

## What happens on export?

On export, the ProcEd largely performs the same actions for both the vatSys and EuroScope releases, but performs and exports them slightly differently. 

### vatSys

* Each Aerodrome in the `contl_apt` and `uncontl_apt` tables are given their own Map folder within the `Maps` dropdown. The file name `XX_ACU` is dictated by the `icaoabbrv` in the relevant table.
* All of the SIDs, STARs and approaches are rendered on their own map layer, sorted by runway. RNP and RNP-AR approaches are given their own map layers, also sorted by runway.
    * These are also given custom colours, but these are better explained in the individual procedure sections.
* All VFR arrivals and departures are also given their own map layer, independent of the VRP map layer.

### Euroscope

* All procedure layers are rendered into the SIDSTAR section, and are sortable by ICAO. VFR procedures are also rendered in this section.

## Threshold Fixes

In the dataset, custom fixes have been created for each threshold of a runway. These are generated from the runway data provided by the ANR, and don't require any manual attention by the user.

They usually follow the format of `XXYYT` - where `XX` is the two letter ICAO abbreviation, `YY` is the runway identifier, and `T` denotes the threshold. For example, `PM07T` and `PM25T` denote the thresholds for Palmerston North's single runway.  

Where a runway has a R/L designation, the designator will replace the `T`. For example, `AA23L` and `AA05R` denote the thresholds for Auckland.

These are mostly used in SIDs, where an origination point is required. These used to be used for approach procedures, but are now appended automatically by the SFG upon dataset export.