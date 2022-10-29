---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

## HB ADC / HB TCU
### Auto Release

"Next" Coordination to HB TCU is required for all deps not assigned a SID.

"Next" Coordination is a procedure where the **HB ADC** controller gives a heads-up to the HB TCU controller about an impending departure not on a SID. The HB TCU controller will respond by assigning a visual heading to the aircraft, for the **HB ADC** controller to pass on with their takeoff clearance.

!!! example
    **HB ADC** -> **HB TCU**: "Next, ABC"  
    **HB TCU** -> **HB ADC**: "ABC, Heading 150 Visual"  
    **HB ADC** -> **HB TCU**: "Heading 150 Visual, ABC"  
    **HB ADC** -> **ABC**: "ABC, Assigned heading right 150 Visual, Runway 12, Cleared for Takeoff"  
    **ABC** -> **HB ADC**: "Right heading 150 Visual, Runway 12, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

The HB TCU controller can suspend/resume Auto Release at any time, with the concurrence of **HB ADC**.

!!! Note
    "Next" Coordination to HB TCU is not required for aircraft assigned a **Procedural SID** and the Standard Assignable Level.

The controller assuming responsibility of **HB ACD** shall give heads-up coordination to HB TCU controller prior to the issue of the following clearances:  
a) VFR Departures  
b) Aircraft using a runway not on the ATIS

### Arrival Coordination
HB TCU will coordinate all **non-STAR** arrivals 5min from IAF or 5min from CTA boundary prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **HB TCU** -> **HB ADC**: "JST419, A320, estimates Hobart 52, RNAV-Z 12 via HBZWG, 5000ft, number 1”
    **HB ADC** -> **HB TCU**: "JST419"

## Standard Assignable Departure Levels

Jets: `A080`
Non-jets: `A045` or `RFL` if lower