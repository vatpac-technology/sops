---
  title: Manual Airspace Definitions
---

--8<-- "includes/abbreviations.md"

The Sector File Generator, in addition to automatically importing CTR/CTA/OCA airspace definitions, can also store and export manual airspace definitions. This is incredibly handy for having different Enroute Sectors export definitions for vatSpy versus vatSys, for example.

## Database Overview

Draw definitions follow the standard NZ eAIP method of drawing airspace, as used in the ANR. 

All airspace definitions are stored in the `airspace` table of the database. The important columns are - 

* `id` - Automatically generated on import.
* `ident` - The identifier of that airspace. This is explained below.
* `VSName`, `Comment` - Contains the name of the airspace.
* `Type` - Airspace Type. This is explained below.
* `ExportID` - Dictates which product this airspace is exported to. This is explained below.

### Unique Airspace Identifiers

All airspace imported into the database must have a unique `ident`. Airspace imported from the ANR will have their airspace designator set as the `ident`, so should be unique by default.

It is best practice to have the Sector set as the `ident`, as it is easily distinguishable, without having to manually test it. Imported airspace identifiers **must** fit the following criteria - 

* **Enroute**: `NXXX`, with an optional `_X` or `-X` where X can be alphanumeric.
* **Manual FIR**: `NXXX`, with an optional `_X` or `-X` where X can be alphanumeric.
* **TMA**: `NZTnnn`, with an optional `_X` or `-X` where X can be alphanumeric.
    * where `nnn` is a unique sequence number.

### Airspace Types

There are a handful of different airspace types in the database. The `CFZ`, `MBZ`, `CTA`, `CTR`, `FIR`, `Military`, `Danger` and `Restricted` areas are automatically labelled by the ANR import process.

The only user configurable airspace types are `ENR`, `MFIR` and `TMA`.

!!! info ""
    Airspace imported as `ENR`, `MFIR` or `TMA` will be exported to the dataset in line with the ExportID. The `ENR` type will be exported as an Enroute map, `MFIR` as a FIR map, and `TMA` as a TMA map.


### Export IDs

The SFG is capable of storing multiple unique airspace definitions, and exporting them to multiple differing platforms. This is achieved through the `ExportID` column.

Each piece of airspace is tagged with one of the following `ExportID`, dictating which products it is exported to - 

* `NZZC` - Exported to both vatSys/ES and vatSpy
* `VSPY` - Exported **only** to vatSpy
* `VSYS` - Exported **only** to vatSys/ES
* `NZZCVSYS` - Exported **only** to the NZZC vatSys/ES release
* `NZZO` - Exported to the Oceanic profile and vatSpy
* `NZZOVSYS` - Exported **only** to the Oceanic vatSys profile
* `NZZCNZZO` - Exported to both vatSys/ES profiles, and to vatSpy.

!!! warning ""
    Airspace imported from the NZ ANR are automatically labelled with the `NZZC` ExportID. If an export ID isn't provided in the Import Limits Line, it is imported as `NZZC`.

## Format Overview

Each file has a header line defining the type of airspace, before a name and limits line. The header line will be covered in the examples, as they're self explanatory.

### Limits Line

The Name and Limits Line defines how this is represented in the database.


``` title="Limits Line"
[Ident] [Type] [Airspace Class] [UpperLimit] [LowerLimit] [Optional Export Tag]

For example - 
NZCT Taranaki Only ENR C 99900 FT 0 FT VSYS
NZCT-A Taranaki with Ohakea ENR C 99900 FT 0 FT VSPY
NTTT Tahiti Oceanic FIR FIR 999 FL
NSFA Faleolo FIR FIR 999 FL

```

* `Ident` - As referenced in the Unique Airspace Identifiers section.
* `Type` - TMA, ENR or MFIR.
* `Airspace` Class - A, C or D.
* `UpperLimit` - Upper Limit in either FT or FL. EG 0 FT, 3500 FT, 130 FL. MFIR only has an upper limit.
* `LowerLimit` - Lower Limit. As above.
* `Export Tag` - As above.

### Boundary Lines

Boundary Lines are defined immediately after the Name and Limits line.

``` title="Boundary Lines"
[Ident] [SequenceNum] [Lattitude] [Longitude] [LineType] [ArcDef]

For example -
NZT001 5 403753.80S 1745231.60E GRC
NZT001 6 394745.20S 1744603.20E CWA 401234.58S 1752331.05E 38.00 NM

```

* `Ident` - Must match the ident used in the Name and Limits Line.
* `SequenceNum` - A unique line identifier. Starts at 0.
* `Lattitude` - Lattitude in eAIP format.
* `Longitude` - Longitude in eAIP format.
* `LineType` - Either `GRC`, `CCA`, `CIR`, `CWA`, `RHL` or `FNT`.
* `ArcDef` - As needed to define an arc or circle.

## Examples

Here are some examples that are currently in our database.

``` title="Taranaki Sector (for vatSpy only)"
EnRoute Airspace (ENR)
NZCT-A Taranaki with OH ENR C 99900 FT 0 FT VSPY
NZCT-A 0 390738.100S 1713321.701E GRC
NZCT-A 1 390026.071S 1741102.159E GRC
NZCT-A 2 391349.109S 1745455.602E GRC
...
NZCT-A 20 413400.000S 1701435.005E GRC
NZCT-A 21 412527.005S 1702324.000E CWA 412013.600S 1744902.000E 200 NM // WN VOR
NZCT-A 22 390738.100S 1713321.701E GRC 
```

!!! note "Multiple in one?!"
    You can import multiple pieces of airspace in the same file, just by defining additional Name and Limits!

``` title="NZZO for vatSpy"

Manual Flight Information Regions (MFIR)
NZZO-A Auckland Oceanic FIR FIR 999 FL VSPY
NZZO-B Auckland Oceanic FIR FIR 999 FL VSPY
NZZO-A 0 300000.00S 1310000.00W GRC
NZZO-A 1 600000.00S 1310000.00W GRC
NZZO-A 2 600000.00S 1800000.00W GRC
NZZO-A 3 250000.00S 1800000.00W GRC
NZZO-A 4 135508.00S 1750623.00W GRC
NZZO-A 5 050000.00S 1711000.00W GRC
NZZO-A 6 050000.00S 1570000.00W GRC
NZZO-A 7 300000.00S 1570000.00W GRC
NZZO-B 0 280000.00S 1680000.00E GRC
NZZO-B 1 250000.00S 1712500.00E GRC
NZZO-B 2 250000.00S 1800000.00E GRC
NZZO-B 3 600000.00S 1800000.00E GRC
NZZO-B 4 600000.00S 1630000.00E GRC
NZZO-B 5 450000.00S 1630000.00E GRC
NZZO-B 6 300000.00S 1630000.00E GRC

```

## TMA

TMAs follow much the same import format, with a few changes -

* `NZTnnn` must be the Ident, in order to conform with the AIP.
* `MyIdent:Terminal Name` must be used as the Name.

!!! warning
    `NZTnnn` is only used during the import process to define the sequence, and `NZTnnn` is **not** imported at the Ident in the database. `MyIdent` should be set as the Ident you wish to be the Ident in the database, with `Terminal Name` being the name of the TMA.

``` title="TMA Import"
Terminal Airspace (TMA)
NZT001 NZOH:Ohakea Approach TMA C 0 FT 0 FT
NZT001 0 451213.40S 1681524.00E GRC
...
NZT001 5 451213.40S 1681524.00E GRC


```

## Importing Airspace

Airspace can be imported to the database by heading into the 'DB Update' screen, clicking on 'Import eAIP Airspace`, and navigating to your file. You'll get an alert when the changes have been made.

Likewise, you can also convert your eAIP definitions using the Airspace Converter utility.

## Deleting Airspace

It couldn't be easier! You just need a file containing the following:

``` title="Delete Airspace"
For MFIRs:
  Manual Flight Information Regions (MFIR)
  NZDelete [Ident] FIR [UpperLimit] [ExportID]

For ENR: 
  EnRoute Airspace (ENR)
  NZDelete [Ident] ENR [AirspaceClass] [UpperLimit] [LowerLimit] [ExportID]

For TMA:
  Terminal Airspace (TMA)
  NZDelete [Ident] TMA [AirspaceClass] [UpperLimit] [LowerLimit]

```

??? hint "Importing and Delete in the same file"
    Follow this example!

    ```
    EnRoute Airspace (ENR)
    NZDelete NZOH ENR C 99900 FT 0 FT VSPY
    NZOZ Ohakea(Test) ENR C 99900 FT 0 FT VSPY

    NZOZ 0 395040.898S 1782455.300E GRC
    NZOZ 1 390908.000S 1774518.799E GRC
    ...
    NZOZ 19 404502.509S 1752411.023E GRC

    ```


## Merging Airspace

I'll write this soon.


