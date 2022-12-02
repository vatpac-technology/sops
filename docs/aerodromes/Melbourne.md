---
  title: Melbourne (YMML)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Melbourne ADC    | Melbourne Tower   | 120.500          | ML_TWR                                   |
| Melbourne SMC    | Melbourne Ground  | 121.700          | ML_GND                                   |
| Melbourne ACD         | Melbourne Delivery| 127.200          | ML_DEL                                   |
| Melbourne ATIS        |                | 118.000         | YMML_ATIS                                |

## Airspace
**ML ADC** is responsible for the Sunbury Corridor airspace as shown below. It is only available to Day VFR Helicopters.

<figure markdown>
![Melbourne TCU Airspace Administration](img/MLTCUairspace.png){ width="500" }
  <figcaption>Melbourne TCU Airspace Administration</figcaption>
</figure>

!!! example
    **HEMS3:** "Melbourne Tower, HEMS3, Approaching Sunbury Water Tank, A020, Request clearance for Sunbury Corridor"  
    **ML ADC:** "HEMS3, Enter the zone, Track Sunbury Corridor, not above A020"  
    **HEMS3:** "Enter the zone, Track Sunbury Corridor, not above A020, HEMS3"

## Runway Modes
If winds are too great, single runway operations may be necessary (eg, Runway 16 for Arrivals and Departures). However, pending wind limitations (Crosswind <20kts, Tailwind <5kts), the following runway modes are to be used

| Mode | Arrivals  | Departures |
| ----------------| --------- | ---------- |
| 27AD/34D   | 27       | 34 (Departures NE), 27 (All other deps)        |
| 16A/27D    | 16 | 27  |

!!! information
    "Departures NE" means departures via MNG, NONIX and DOSEL. Runway 34 for departure may also be more suitable during this runway mode for heavy aircraft, and aircraft taxiing from the southern apron.

#### SID Selection

Jet Aircraft planned via **MNG**, **NONIX**, **DOSEL**, **CORRS**, **KEPPA**, **NEVIS**, **SUNTI**, **ESDIG**, or **CRENA**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint. Jet Aircraft **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

!!! example
    Jet Aircraft planned via DOSEL, assigned runway 27, shall be given the DOSEL SID.

Jet aircraft planned via **MNG**, **NONIX**, **DOSEL**, **KEPPA**, or **NEVIS**, using Runway 16 for departure **Off Mode**, shall be assigned the **KAGMU** SID.

!!! definition
    **Off Mode:** Aircraft departing from a runway not prescribed as active for departures on the ATIS. For example, a heavy aircraft that operationally requires Runway 16 for departure during the 16A/27D Mode.

a) Jet aircraft departing **Off Mode** that don't meet the above critera; or  
b) Non-Jet Aircraft; or  
c) All aircraft using Runway 09; or  
d) Aircraft that cannot accept a Procedural SID  
Shall be assigned the **Radar SID**.

!!! example
    Non-Jet Aircraft planned via DOSEL, assigned runway 34, shall be given the ML (RADAR) SID.

## ATIS

### ATIS Identifier
YMML ATIS identifiers only uses letters `N` through to `Y`, due to nearby YMEN using letters `A` through `M`.  

### Approach Expectation
With **Runway 34** in use for arrivals and the cloud base above `A030` but below `A042`, the APCH field shall include:  
`ACFT ON THE ALPHA STAR EXP INSTR APCH` 

This permits controllers to assign aircraft either the Alpha or Victor STAR and process them for a GLS/RNP approach or a visual approach (depending on traffic flow and pilot preference).

## Coordination
### ML ADC / ML TCU
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A050`;

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call

!!! example
    <span class="hotline">**ML ADC** -> **ML TCU**</span>: "Next, ABC, runway 34"  
    <span class="hotline">**ML TCU** -> **ML ADC**</span>: "ABC, Track Extended Centreline, unrestricted"  
    <span class="hotline">**ML ADC** -> **ML TCU**</span>: "Track Extended Centreline, unrestricted, ABC"  

    **ML ADC**: "ABC, Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff"  
    **ABC**: "Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

### Runway Change
Any Runway change must be prior coordinated to **MAE** and **EN ADC**.

## Departures Controller

Refer to [Melbourne TCU Airspace Division](../../terminal/melbourne/#airspace-division) for information on airspace divisions when **MDN** and/or **MDS** are online.

## Standard Assignable Levels

IFR: `A050`  
VFR: `A040` or `RFL` if lower

