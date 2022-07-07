---
title: Database Tables
---

--8<-- "includes/abbreviations.md"

This section will outline some of the tables within the database, and what they are used for.

### airspace

All discreet portions of defined airspace are found in this table. These are only airspace definitions and not boundary definitions - those can be found in the `airspaceboundary` table.

More information on this table can be found on the [Manual Airspace Definitions](ManualDefintions.md) page.

### airspaceboundary

Contains the boundary points for the airspace defined in the `airspace` table. The value in the `id_airspace` column aligns with the `id`  for a particular piece of airspace in the `airspace` table.

This table is edited through the import process, and you should not edit this table.

### airwaywpts

Contains the defined segments of an airway. The value in the `aw_id` column aligns with the `id` for a particular airway in the `airwayxml` table.

This table is edited through the import process, and you should not edit this table.

### airwayxml

Contains the defined airways. The `Route` is the name of the airway.

This table is edited through the import process, and you should not edit this table.

### ap_aids

Contains all of the discrete points in space within the dataset. They are defined by the `Type` column:

  * **AD, HP** - Aerodromes or Heliports.
  * **IFR_FIX** - All IFR fixes, either though manual or automatic import.
  * **THR_FIX** - Fixes that exist at the threshold of a runway. These are automatically appended to all approaches when exported.
  * **VFR_FIX** - Visual Reporting Points.
  * **NDB, VOR** - NDBs and VORs. Also has an associated two or three letter identifier, a frequency and a full name.
  * **PAC_FIX** - All IFR fixes that exist within the NZZO/NTTT/TSN boundaries.
  * **PAC_NDB and PAC_VOR** - All NDBs and VORs that exist within the NZZO/NTTT/TSN boundaries.
  * **PAC_AIRPORT** - All airports that exist within the NZZO/NTTT/TSN boundaries, but outside of the NZZC.

This table is edited through the import process, and you should not edit this table.

### artcclookup

This table defines how specific airspace types get treated during the EuroScope export.

This table is edited through the import process, and you should not edit this table.

### colours

This table contains all of the colour definitions that are exported as a part of the EuroScope export.

Values in the `ColourCode` column should conform to the standard EuroScope colour schema.

### contl_apt

This table defines all of the aerodromes that are Controlled. This includes all stations - GND through to APP.

### diagrams

### disclaimer

The disclaimer that is exported as a part of the EuroScope export.

### disclaimer_test

The disclaimer that is exported as a part of the EuroScope export when testing is enabled.

### es_arpt_layouts

Contains the layouts that are imported through `DB Update > Import Arpt Layout File`. This is exported during the EuroScope export.

### es_copx

Contains all COPX definitions for EuroScope. This is exported in both the vatSys and EuroScope exports and can be amended through the Master ESE.

### es_freetext

Contains all free text definitions. This is exported in both the vatSys and EuroScope exports and can be amended through the Master ESE.

### es_radar

Contains all RADARs for both vatSys and EuroScope. This is exported in both the vatSys and EuroScope exports and can be amended through the Master ESE.

### es_sectorline

Contains the SCL definitions used for EuroScope. This is exported in the EuroScope export and can be amended through the Master ESE.

### es_sectors

Contains all discrete sector/volume owners for EuroScope. This is exported in the EuroScope export and can be amended through the Master ESE.

### geo

### geo_coast

Contains the coastline data for both EuroScope and vatSys. [See the Updating Coastlines page](UpdatingCoastlines.md) for how to update this.

### holding

Contains all defined holds. This table is edited through the import process, and you should not edit this table.

### info

Contains the [INFO] section that is exported as a part of the EuroScope export.

### labels

### magvar

Contains the Magnetic Variation for each aerodrome within the dataset. This should be updated once a year though `Utilities > Update Airport Magnetic Variation`.

### pac_airwaywpts

Much like the `airwaywpts` table, but for Pacific Airways.

### pac_airwayxml

Much like the `airwayxml` table, but for Pacific Airways.

### proc_name_abbrv

For procedures that have a different full name, when compared to what is shown in the aircraft FMC. For example, the `November 1` departure is shown as the `NVBR1` on aerodrome plates.

The data in the `sct_name` column defines the full name of the procedure, and `ese_name` is the abbreviated name for the procedure. This is usually shown on the aircraft plate in brackets. 

Normal IFR Point termination procedures such as the `NOBAR1E` will automatically be shortened to the `NOBA1E`, so there is no need to put these in.

You can use the shortened name within the name of a procedure within the Procedure Editor, and it will automatically resolve back to the full name.

### procedures

Contains all procedures as defined in the Procedure Editor.

You should not edit this table unless the SFG tells you to, as a part of its' error checking.

### ra_nameabbrv

Contains VRP point abbreviations. Where a word in a VRP matches with the text column, it is abbreviated to the matched text.

### regions

### runway

Contains all defined runways for both datasets, and each runway had its own entry.

This table also allows you to set the extended centreline that is shown within the `Runways` map in vatSys. `RwyXExt` defines the distance the extended centreline is drawn, and `TickXInt` defines how often a mile marker is drawn. 

### transfixes

Defines all transition fixes. This table is automatically generated by the SFG, and should not be edited unless the SFG tells you to as a part of its' error checking.

### uncontl_apt

By default, the SFG will not export distinct map layers for all aerodromes, unless they are defined as a controlled aerodrome in the `contrl_apt` table.

Since many aerodromes in the NZZC have IFR procedures, they can be added to this table to have their various ACU map layers drawn on export.