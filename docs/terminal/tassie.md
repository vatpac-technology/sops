---
  title: Tassie TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | ---------------------|
| Hobart Approach  | HBA | Hobart Approach  | 125.550       | HB_APP    |
| Launceston Approach  | LTA | Launy Approach   | 123.800        | LT_APP                 |

!!! Note
    Hobart Approach may extend to Launy Approach and vice versa, callsigns remain the same.

## Airspace
The TAS TCU has an upper limit of FL245 within the following area:

<figure markdown>
![TAS TCU](img/TASTCU.png){ width="700" }
</figure>

## Hobart

All aircraft should be kept on SIDs and STARs. If due to operational requirements, an aircraft is unable to accept the SID or STAR, Coordination with HUO may be required.

## Launceston

Visual approaches are preferred into Launceston. If due to operational requirements, an aircraft is unable to accept a visual approach, Coordination with **LT ADC** may be required.  

Runway 32L is preffered geographically. To assist traffic flow in and out of the TCU, ATC will instruct aircraft to track for 32L via IRSOM, NODAS, MLTSC which keeps the aircraft within CTA and away from the departures stream.

## Coordination

### TAS TCU / ENR
#### Departures
Voiceless coordination is in place from TAS TCU to **HUO** for aircraft:  
**Departing All Ports** - Assigned the lower of `F240` or `RFL`  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    **TAS TCU** -> **HUO**: "via IRSOM, QFA114, with your concurrence, will be assigned F150, for my separation with ZYX"  
    **HUO** -> **TAS TCU**: "QFA114, concur F150"  

#### Arrivals
The Standard assignable levels from **HUO** to TAS TCU are as follows:  
YMLT Arrivals: `A090`  
YMHB Arrivals: `F130`

### HB ADC / HB TCU
#### Auto Release

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

#### Arrival Coordination
HB TCU will coordinate all **non-STAR** arrivals 5min from IAF or 5min from CTA boundary prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **HB TCU** -> **HB ADC**: "JST419, A320, estimates Hobart 52, RNAV-Z 12 via HBZWG, 5000ft, number 1”
    **HB ADC** -> **HB TCU**: "JST419"

### LT ADC / LT TCU

#### Taxi Call
A taxi call shall be made between LT ADC and LT TCU as an aircraft is given taxi clearance. Center will respond by acknowledging the callsign and activating FDR.

!!! example
    **LT ADC** -> **LT TCU**: "Taxis QFA400 for YSSY via NOLAN"  
    **LT TCU** -> **LT ADC**: "QFA400"  

#### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. LT TCU will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **LT ADC** -> **LT TCU**: "Next QFA400"  
    **LT TCU** -> **LT ADC**: "QFA400, FL140"  
    **LT ADC** -> **LT TCU**: "FL320, QFA400"  

#### Departure Call
A departure call should be made as the aircraft becomes airborne. If not already issued, TCU will issue a higher level. The aircraft should be transferred to TCU as they climb through the upper level of the LT class D airspace.

!!! example
    **LT ADC** -> **LT TCU**: "Departure QFA400 at 06"  
    **LT TCU** -> **LT ADC**: "QFA400"

#### Arrival Coordination
LT TCU will coordinate all arrivals into Launceston Prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **LT TCU** -> **LT ADC**: "JST416, A320, estimates Launceston 52, RNAV-Z 14R via MLTNE, 5000ft, number 1”
    **LT ADC** -> **LT TCU**: "JST416"