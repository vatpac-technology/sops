---
  title: Coral TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | ---------------------|
| Mackay Approach  | MKA | Coral Approach  | 125.650       | MK_APP    |
| Rockhampton Approach  | RKA | Coral Approach   | 123.750        | RK_APP                 |

!!! Note
    Mackay Approach may extend to Rockhampton Approach and vice versa, callsigns remain the same.

## Coordination

### COR TCU / ENR
#### Departures
Voiceless coordination is in place from COR TCU to **HUO** for aircraft:  

**Departing All Ports** - Assigned the lower of `F240` or `RFL`  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    **COR TCU** -> **ENR**: "QFA114, with your concurrence, will be assigned F150, for my separation with ZYX"  
    **ENR** -> **COR TCU**: "QFA114, concur F150"  

#### Arrivals
The Standard assignable levels from **ENR** to COR TCU are as follows:  
YBMK Arrivals: `A090`  
YBRK Arrivals: `A090`

### ADC / TCU
#### Auto Release

"Next" Coordination to TCU is required for all deps not assigned a SID.

"Next" Coordination is a procedure where the **ADC** controller gives a heads-up to the TCU controller about an impending departure not on a SID. The TCU controller will respond by assigning a visual heading to the aircraft, for the **ADC** controller to pass on with their takeoff clearance.

!!! example
    **MK ADC** -> **MK TCU**: "Next, ABC"  
    **MK TCU** -> **MK ADC**: "ABC, Heading 150 Visual"  
    **MK ADC** -> **MK TCU**: "Heading 150 Visual, ABC"  
    **MK ADC** -> **ABC**: "ABC, Assigned heading right 150 Visual, Runway 14, Cleared for Takeoff"  
    **ABC** -> **MK ADC**: "Right heading 150 Visual, Runway 14, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

The TCU controller can suspend/resume Auto Release at any time, with the concurrence of **ADC**.

!!! Note
    "Next" Coordination to TCU is not required for aircraft assigned a **Procedural SID** and the Standard Assignable Level.

The controller assuming responsibility of **ACD** shall give heads-up coordination to TCU controller prior to the issue of the following clearances:  

- VFR Departures  
- Aircraft using a runway not on the ATIS

#### Arrival Coordination
TCU will coordinate all **non-STAR** arrivals 5min from IAF or 5min from CTA boundary prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **TCU** -> **ADC**: "JST420, A320, estimates Mackay 52, RNP 14 via BMKNA, 4700ft, number 1”  
    **ADC** -> **TCU**: "JST420"