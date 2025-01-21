---
  title: Pearce (YPEA)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Pearce ADC**    | **Pearce Tower**  | **118.300**    | **PE_TWR**        |
| **Pearce SMC**    | **Pearce Ground**  | **127.250**   | **PE_GND**        |
| **Pearce ACD**    | **Pearce Delivery**  | **134.100** | **PE_DEL**       |
| Pearce ATIS    |   | 136.400         | YPEA_ATIS       |

## Airsapce
PE ADC owns the airspace within the Pearce CIRA (**5nm** Radius of YPEA ARP, located entirely within **R155A**) from `SFC` to `A035`. This airspace is primarily used for military circuits and initial and pitch approaches.

### SID Selection
All aircraft shall be assigned the **Radar** SID by default.

vatSys does not have Procedural SIDs built-in for YPEA. As long as ATC is familiar with the chart, and the pilot is able, aircraft may be assigned **Procedural SIDs** *on pilot request*.

## Miscellaneous
### Circuit Operations 
Aircraft can be instructed to extend outside of this airspace by ATC for traffic management, following coordination with the appropriate sectors.

HAWKs have circuit altitude of `A016`, while both 2FTS and RSAF PC21s are assigned `A012`.

!!! note
    36L/18R is unsuitable for HAWK Aircraft

### Circuit Direction

| Runway | Direction |
| ------ | ----------|
| 05      | Left  |
| 18L    | Right |
| 18R    | Right |
| 23     | Right |
| 36L    | Left  |
| 36R    | Left  |

### Initial and Pitch Procedures 

| Runway | Direction Initial | Inital Altitude
| ------ | ------------------|----------------|
| 05     | Any | A010 |
| 18L    | Left/Straight<br>Right | A015<br>A010 |
| 18R    | Left/Straight<br>Right | A015<br>A010 |
| 23     | Any | A015 |
| 36L    | Left<br>Right | A010<br>A015 |
| 36R    | Left<br>Right | A010<br>A015 |

## Coordination
### PE TCU
'Next' coordination is required from PE ADC to PE TCU for all aircraft.

!!! phraseology
    <span class="hotline">**PE ADC** -> **PE TCU**</span>: "Next, ASY01, runway 36L"  
    <span class="hotline">**PE TCU** -> **PE ADC**</span>: "ASY01, Heading 030, unrestricted"  
    <span class="hotline">**PE ADC** -> **PE TCU**</span>: "Heading 030, ASY01"

The Standard Assignable Level from **PE ADC** to **PE TCU** is:

- `F130` for aircraft assigned a Procedural SID; except
- `A030` for aircraft assigned the **GUNOK** SID; or
- The lower of `F130` or `RFL` for all other aircraft

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}