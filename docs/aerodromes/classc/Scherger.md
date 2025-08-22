---
  title: Scherger (YBSG)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Scherger ADC**    | **Scherger Tower**  | **118.300**         | **SG_TWR**        |
| **Scherger SMC**    | **Scherger Ground**  | **126.200**      | **SG_GND**        |
| **Scherger ATIS**    |   | **134.800**         | **YBSG_ATIS**       |

## Airspace
SG ADC owns the Class C airspace within the SG CTR from `SFC` to `A015`.

## Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 30     | Right  |
| 12     | Left |

## Weipa (YBWP)
SG ADC is responsible for clearances into and out of Weipa (YBWP), which sits inside the Scherger Class C control zone when active.

!!! note
    While SG ADC is responsible for the airspace from `SFC` to `A015` above YBWP, they have **no jurisdiction** over the runways, taxiways, or apron areas on the aerodrome itself.

### Departures
Outbound aircraft will report when taxiing for departure to **SG ADC**. ADC shall issue the aircraft with a squawk code and a traffic statement regarding any aircraft operating on, or shortly to land at, the aerodrome.

!!! note
    Both VFR and IFR aircraft require a clearance to operate in Class C airspace.  The examples below show an IFR aircraft departing.

!!! phraseology
    **QLK479D:** "Scherger Tower, QLK479D, Dash 8, IFR, taxiing YBWP for YBCS, runway 12"  
    **SG ADC:** "QLK479D, squawk 4432, no reported traffic, report lined up for airways clearance"  
    **QLK479D:** "Squawk 4432, wilco, QLK479D"

As per [Coordination](#sg-tcu), Next coordination is required to SG TCU for all departing aircraft.

!!! phraseology 
    <span class="hotline">**SG ADC** -> **SG TCU**</span>: "Next at YBWP, QLK479D, runway 12"  
    <span class="hotline">**SG TCU** -> **SG ADC**</span>: "QLK479D, right turn, unrestricted"  
    <span class="hotline">**SG ADC** -> **SG TCU**</span>: "Right turn, QLK479D"

!!! phraseology
    **QLK479D:** "QLK479D, lined up"  
    **SG ADC:** "QLK479D, cleared to YBCS via GUPDA, flight plan route, climb to F230, make right turn, report airborne"  
    **QLK479D:** "Cleared to YBCS via GUPDA, flight plan route, climb to F230, make right turn, QLK479D" 

All surface areas at YBWP are **outside ADC's jurisdiction**. Takeoff clearances are not given. Departing aircraft planned above `A015` shall be transferred to SG TCU once airborne.

!!! phraseology
    **QLK479D:** "QLK479D, airborne"  
    **SG ADC:** "QLK479D, contact Scherger Approach, 124.2"  
    **QLK479D:** "124.2, QLK479D" 

Where a delay is required, withhold departure instructions until a suitable separation standard exists.

!!! phraseology
    **QLK479D:** "QLK479D, lined up"  
    **SG ADC:** "QLK479D, short delay due to traffic inbound to YBSG"  
    **QLK479D:** "QLK479D"


### Arrivals
Inbound aircraft will be given an airways clearance by SG TCU and transferred to ADC. If SG TCU is offline, aircraft entering the Scherger CTR directly from Class G will contact SG ADC for clearance. Aircraft should be instructed to join a leg of the circuit and cleared for a visual approach (traffic permitting).  In IMC, IFR aircraft will fly one of Weipa's instrument approaches.

As a landing clearance is not given, aircraft should instead be informed of any traffic operating on the aerodrome and instructed to report clear of the runway.

## Coordination
### SG TCU
[Next](../../controller-skills/coordination.md#next) coordination is required from SG ADC to SG TCU for all aircraft (including aircraft departing from YBWP).

The Standard Assignable Level from **SG ADC** to **SG TCU** is:

| Aircraft | Level |
| ------- | ------- |
| All | The lower of `F240` and `RFL` |

### ISA(ARA)
When SG TCU is offline, coordination is not required between SG ADC and ISA(ARA). Aircraft entering ISA(ARA) airspace shall be handed off, and instructed to contact ISA(ARA) for onwards clearance.

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}