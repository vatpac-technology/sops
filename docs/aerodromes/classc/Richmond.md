---
  title: Richmond (YSRI)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Richmond ADC**    | **Richmond Tower**  | **135.500**         | **RI_TWR**        |
| **Richmond SMC**    | **Richmond Ground**  | **128.250**      | **RI_GND**        |
| **Richmond ATIS**    |   | **123.300**         | **YSRI_ATIS**       |

## Airspace
RI ADC being online will activate the **R470** Restricted Area, which is reclassified as **Class C** when active.

Control authority of the **R470** Restricted Area when active is as follows:

- RI ADC: `SFC`-`A015`
- SY TCU (SDN): `A015`-`A045`

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## SID Selection
Military aircraft planned via **ANKUB**, **KADOM** or **MUDGI** may be assigned the SID that terminates at the appropriate waypoint. Aircraft who are not planned via these points, or who are negative RNAV, may be assigned a visual departure.

!!! tip
    Military SID charts are contained in the [RAAF TERMA](https://ais-af.airforce.gov.au/){target=new} document.

## VFR Procedures
VFR aircraft transiting to/from YSRI should do so at `A015`.

Aircraft intending to transit the RIC CTR should plan via the [Richmond Lane of Entry](#richmond-lane-of-entry).

### Richmond Lane of Entry
A [lane of entry](../../airspace/lanesofentry.md) is available in the western portion of the RIC CTR, allowing aircraft to transit the zone from north to south (or vice versa). A clearance is required from **RI ADC** prior to entering the CTR.

| Direction | Routing | Altitude | Reporting Point |
| --- | --- | --- | --- |
| Northbound | NPBR, then via the powerlines to KRMD, then WSFR | `A015` | KRMD |
| Southbound | WSFR to KRMD, then via the powerlines to NPBR | `A015` | KRMD |

!!! phraseology
    **FWC**: "Richmond Tower, FWC, Cessna 172, 4nm south of NPBR, `A015`, received Bravo, for the lane of entry, request clearance"  
    **RI ADC**: "FWC, squawk 0366, remain outside controlled airspace"  
    **FWC**: "Squawk 0366, remain outside controlled airspace, FWC"  

    **RI ADC**: "FWC, identified, cleared to track via the lane northbound, maintain `A015`"  
    **FWC**: "Cleared to track via the lane northbound, maintain `A015`, FWC"  

Pilots must report their position and estimate for their next waypoint at KRMD.

!!! phraselogy
    **FWC**: "FWC, KRMD, estimating WSFR at time 33"  
    **RI ADC**: "FWC"

Details of the lane are available in the `YSRI ERSA FAC` and on the Sydney VTC.

!!! note
    Delays may be required during times of peak traffic into/out of YSRI.

### Training Areas
There are three training areas located within R470, used for both civil and military operations.

!!! warning "Important"
    Operations above `A015` may require an airspace release from **SY TCU**. Due to published departure procedures from YSSY, levels above `A040` may not be available.

| Name | Vertical Limits | Lateral Boundary |
| ---- | --------------- | --- |
| Londonderry Training Area | `SFC - A015` | Yarramundi Bridge<br>East to Springwood Road<br>Bonner Road to intersection of Vincent Road<br>West along Vincent Road to the intersection of the Nepean River<br>North via the eastern bank of the Nepean River to Yarramundi Bridge |
| Northern Training Area | `SFC - A060` | Intersection of North-South powerlines & Bells Line of Road<br>North along power lines to the R470 boundary<br>East along the R470 boundary to the Hawkesbury River<br>South tot Kurmond Road<br>West along Kurmond Road to Kurmond<br>Via Bells Line of Road to the intersection of the power lines |
| Southern Training Area | `SFC - A040` | Richmond Train Station<br>Weset to the water tank<br>Straight line to the R470 boundary<br>Along the R470 boundary to the Northern Road<br>Along Northern Road to the intersection of Richmond/Blacktown Road<br>Richmond Road to George & Macquarie Street to the railway overpass |

!!! tip
    Diagrams of the training areas are available in the [Richmond FIHA AD2](https://ais-af.airforce.gov.au/){target=new} document.

## Circuit Operations
YSRI circuit area is defined as within 6nm of the YSRI ARP. An aircraft operating in the circuit will be issued a clearance to the operate within the circuit area not above `A015`.

### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 10     | Left  |
| 28     | Left |

## Start Approval
A start approval is required whenever parachute drops are conducted onto the Richmond Drop Zone. Additionally, ‘propellers/engines stopped’ reports are required. ATC shall notify these requirements by ATIS broadcast.

## Inital and Pitch
The standard inital points are 5nm downwind of the active runway, dead side, left pitch/circuit.

## Coordination
### SY TCU
[Next](../../controller-skills/coordination.md#next) coordination is required from RI ADC to SY TCU for all aircraft **entering SY TCU CTA**.

The Standard Assignable Level from **RI ADC** to **SY TCU** is:  

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `A050` and `RFL` |