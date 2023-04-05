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
CB ADC is not responsible for any airspace by default.

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
### Auto Release
'Next' coordination is not required to CB TCU for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

All other aircraft require a 'Next' call to CB TCU.

!!! example
    <span class="hotline">**CB ADC** -> **CB TCU**</span>: "Next, XEB, runway 35"  
    <span class="hotline">**CB TCU** -> **CB ADC**</span>: "XEB, heading 010, Unrestricted"  
    <span class="hotline">**CB ADC** -> **CB TCU**</span>: "Heading 010, XEB"

    **CB ADC**: "XEB, Assigned heading Right 010, Runway 35, Cleared for Takeoff"  
    **XEB**: "Right heading 010, Runway 35, Cleared for Takeoff, XEB"

The CB TCU controller can suspend/resume Auto Release at any time, with the concurrence of **CB ADC**.

The Standard Assignable level from CB ADC to CB TCU is:  
For IFR aircraft: `A100`  
For VFR aircraft: The lower of `A040` or the `RFL`

### Runway Change
Any Runway change must be prior coordinated to **CB TCU**.