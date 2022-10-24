---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

# SY ADC / SY TCU
### Auto Release

"Next" Coordination is a procedure where the **SY ADC** controller gives a heads-up to the SY TCU controller about an impending departure. The SY TCU controller will respond by assigning a heading to the aircraft, for the **SY ADC** controller to pass on with their takeoff clearance.

!!! example
    **SY ADC** -> **SY TCU**: "Next, ABC"  
    **SY TCU** -> **SY ADC**: "ABC, Heading 030"  
    **SY ADC** -> **SY TCU**: "Heading 030, ABC"  
    **SY ADC** -> **ABC**: "ABC, Assigned heading right 030, Runway 34R, Cleared for Takeoff"  
    **ABC** -> **SY ADC**: "Right heading 030, Runway 34R, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

"Next" Coordination to SY TCU is additionally required for:  
    a) Departures to YSBK  
    b) Jets departing 16L via WOL, except during SODPROPS  
    c) after a go-around, the next departure from that runway

The SY TCU controller can suspend/resume Auto Release at any time, with the concurrence of **SY ADC**.

"Next" Coordination to SY TCU is not required for aircraft assigned a **Procedural SID** and the Standard Assignable Level.

#### Standard Assignable Departure Headings

Aircraft that have been assigned the **Radar SID** must be assigned a heading on departure. “Next” coordination is not required to the SY TCU controller when the departing aircraft has been assigned the standard assignable level, and has been cleared via the headings listed below:

| Runway | Jet | Non-Jet 
| ----------------- | -------------- | ---------------- |
| 07                | 070         | 020, 110       |
| 16L                | 125          | 125 (RWY 25 in use), 090 (RWY 25 not in use) |
| 16R               | 170         | 210         |
| 25                | 300, 240          | 020, 210, 240 |
| 34L                | 290          | 230 |
| 34R                | 030, 070          | 350 |

!!! information
    Where multiple standard assignable headings are available, assign the heading most suitable for the aircraft's direction of flight

#### Standard Assignable Departure Levels

Jets: `A050`
Non-jets: `A030` or `RFL` if lower

# SY ADC / SY SMC
### Ground Operations
As per this (link) diagram, **SY ADC** has Responsibility of the Runways, meaning **SY SMC** must always coordinate with **SY ADC** to allow aircraft to cross runways whilst taxiing. **SY SMC** may request, or **SY ADC** may elect, to release certain runways to the **SY SMC** controller, so they may let aircraft cross the runway without coordination (For example, Releasing runway 07/25 to **SY SMC** whilst PROPS are in progress.) This Release may also be cancelled at the controller's discretion.

# SY ACD / SY TCU
The controller assuming responsibility of **SY ACD** shall give heads-up coordination to the relevant SY TCU controller prior to the issue of the following clearances:  
a) VFR Departures  
b) Aircraft using a runway not on the ATIS

!!! example
    **ABC** -> **SY ACD**: "Sydney Delivery, ABC, Requesting clearance for a Northbound VFR Coastal departure at A035"  
    **SY ACD** -> **ABC**: "ABC, Sydney Delivery, Standby"  
    **SY ACD** -> **SY TCU**: "ABC, Requesting clearance for a Northbound VFR Coastal departure at A035"  
    **SY TCU** -> **SY ACD**: "ABC, Cleared for a Northbound VFR Coastal departure, A035"  
    **SY ACD** -> **SY TCU**: "Cleared for a Northbound VFR Coastal departure, A035, ABC"  
    **SY ACD** -> **ABC**: "ABC, Cleared for a Northbound VFR Coastal departure, A035, Squawk 3601"  
    **ABC** -> **SY ACD**: "Cleared for a Northbound VFR Coastal departure, A035, 3601, ABC"  
