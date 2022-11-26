---
  title: Adelaide (YPAD)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Adelaide ADC    | Adelaide Tower   | 120.500          | AD_TWR                                   |
| Adelaide SMC    | Adelaide Ground  | 121.700          | AD_GND                                   |
| Adelaide ACD         | Adelaide Delivery| 126.100          | AD_DEL                                   |
| Adelaide ATIS        |                | 134.500         | YPAD_ATIS                                |

In the absence of an ACD controller, SMC shall asssume the ACD responsibilities.  
In the absence of an SMC controller, ADC shall assume the SMC and ACD responsibilities.

### Maneuvering Area Responsibility

<figure markdown>
![YPAD Maneuvering Area](img/ypad_maneuvring_area.png){ width="500" }
  <figcaption>YPAD Maneuvering Area</figcaption>
</figure>

## Runway Modes
Single runway operations using Runway 05 or 23 (whichever is more favoured by the winds) are preferred at YPAD. However, when strong winds favour Runway 12 or 30, Non-Jets (Runway 12/30 is too short for most jets) would benefit from having that runway available to them as well. As a general rule of thumb, if the Crosswind on Runway 05/23 exceeds **20kts**, the more favourable of Runway 12 or 30 shall be in use as well as the more favourable of Runway 05 or 23.

!!! example
    METAR: `YPAD 210600Z 15030KT 9999 FEW030 21/11 Q1002 RMK RF00.0/000.0`  
    ATIS: `RUNWAY 23 AND 12 FOR ARRIVALS AND DEPARTURES`

#### Curfew Mode

Between the hours of 1330-2030 UTC (1230-1930 UTC HDS), AD ADC may elect to simulate Curfew operations, ie: **Runway 23 for arrivals, Runway 05 for departures**. When this is in operation, the ATIS shall include `CURFEW IN OPERATION UNTIL (time) ZULU`.

#### SID Selection

Jet Aircraft planned via **PANKI**, **BENDO**, **GILES**, **HAWKY**, **ORBUN**. or **SEDAN**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint. Jet Aircraft **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

!!! example
    Jet Aircraft planned via PANKI, assigned runway 23, shall be given the PANKI# departure.

a) Non-Jet Aircraft; or  
b) Aircraft using Runway 12/30; or  
c) Aircraft that cannot accept a Procedural SID  
Shall be assigned the **Radar SID**.

!!! example
    Non-Jet Aircraft planned via EEMUE, assigned runway 05, shall be given the ADELAIDE# departure.

## Coordination
### AD ADC / AD TCU
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A050`;

Any aircraft that don't meet these criteria must be coordinated to AD TCU with a "Next" Call 

!!! example
    <span class="coord">**AD ADC** -> **AD TCU**</span>: "Next, ABC"  
    <span class="coord">**AD TCU** -> **AD ADC**</span>: "ABC, Track Extended Centreline"  
    <span class="coord">**AD ADC** -> **AD TCU**</span>: "Track Extended Centreline, ABC"  
    <span class="aircraft">**AD ADC** -> **ABC**</span>: "ABC, Track Extended Centreline 222 degrees, Runway 23, Cleared for Takeoff"  
    <span class="aircraft">**ABC** -> **AD ADC**</span>: "Track Extended Centreline 222 degrees, Runway 23, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

## Standard Assignable Levels

Jets: `A050`  
Non-Jets: `A040` or `RFL` if lower