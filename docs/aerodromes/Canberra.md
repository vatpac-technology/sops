---
  title: Canberra (YSCB)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Canberra ADC    | Canberra Tower   | 118.700          | CB_TWR                                   |
| Canberra SMC    | Canberra Ground  | 121.700          | CB_GND                                   |
| Canberra ATIS        |                | 127.450         | YSCB_ATIS                                |

## Airspace

<figure markdown>
![Canberra Tower Airspace](img/CBTWR.png){ width="500" }
  <figcaption>Canberra Tower Airspace</figcaption>
</figure>

## SID Selection

**Jet** Aircraft planned via **CULIN**, **TANTA**, **WG**, **HOWLY**, **NONUP** or **AVBEG** shall be assigned the **Procedural SID** that terminates at the appropriate waypoint. Jet Aircraft **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

**Non-Jet** Aircraft planned via **AKMIR** or **DUBUS** shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.

!!! example
    Jet Aircraft planned via TANTA, assigned runway 35, shall be given the TANTA SID.

a) Jet or Non-Jet aircraft departing **Off Mode** that don't meet the above critera; or   
b) Aircraft that cannot accept a Procedural SID  
Shall be assigned the **Radar SID**.

!!! example
    Non-Jet Aircraft planned via TANTA, assigned runway 35, shall be given the CB (RADAR) SID.

## VFR Operations

VFR aircraft that will operate only in ADCs airspace shall be assigned SSR code 0040.

Aircraft operating in the circuit area are to remain on the ADC frequency. The phrasing of the airways clearance is:

!!! example
    “ABC, cleared to operate in the circuit area, not above A030, squawk 0040”.

The circuit direction is not specified in the airways clearance, but with a take-off or touch-and-go clearance.

Military jet training circuits are conducted at `A035`, unless otherwise requested by the pilot. ADC shall notify the TCU of the beginning and end of the sortie.

City Scenic Flights are available by day and to the west of the aerodrome. Aircraft on these routes shall be cleared at `A045`.

| Runway              | City Flight One      | City Flight Two       |
| ------------------ | -------------- | ---------------- | 
| North (anti-clockwise)    | ALPHA ONE   | ALPHA TWO         | 
| South (clockwise)  | CHARLIE ONE  | CHARLIE TWO          | 

<figure markdown>
![City Flight One](img/CBCTY1.png){ width="500" }
  <figcaption>City Flight One</figcaption>
</figure>

<figure markdown>
![City Flight Two](img/CBCTY2.png){ width="500" }
  <figcaption>City Flight Two</figcaption>
</figure>

## Coordination
### CB ADC / CB TCU
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A100`;  

Any aircraft that don't meet these criteria must be coordinated to CB TCU with a "Next" Call

!!! example
    <span class="hotline">**CB ADC** -> **CB TCU**</span>: "Next, XEB, runway 35"  
    <span class="hotline">**CB TCU** -> **CB ADC**</span>: "XEB, Assigned Left 270, Unrestricted"  
    <span class="hotline">**CB ADC** -> **CB TCU**</span>: "Assigned Left 270, Unrestricted, XEB"    
    
    **CB ADC**: "XEB, Assigned Left 270, Runway 35, Cleared for Takeoff"  
    **XEB**: "Assigned Left 270, Runway 35, Cleared for Takeoff, XEB"  
    `AIP GEN 3.4`

### Runway Change
Any Runway change must be prior coordinated to **CB TCU** and **CB ADC**.

## Standard Assignable Levels

IFR: `A100`  
VFR: `A040` or `RFL` if lower
