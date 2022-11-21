---
  title: Launceston (YMLT)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name              | Callsign       | Frequency        | Login Identifier                         |
| ----------------- | -------------- | ---------------- | ---------------------------------------- |
| Launceston ADC    | Launy Tower   | 118.700    | LT_TWR                         |
| Launceston ATIS       |                | 134.750          | YMLT_ATIS                                |

### Maneuvering Area Responsibility
<figure markdown>
![YMLT Maneuvering Area](img/ymlt_maneuvring_area.png){ width="500" }
</figure>

## Airspace

<figure markdown>
![Launceston Tower Airspace](img/LTTWR.png){ width="700" }
</figure>

<figure markdown>
![Launceston Tower Class D Airspace](img/lttwr_profile.png){ width="700" }
</figure>

LT ADC is responsible for the LT CTR `SFC` to `A015`.

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## SID Selection

Aircraft planned via **IRSOM**, **ONAGI**, **NUNPA**, **MOTRA**, **IRONS**, **MORGO**, **KAREN**, **TASUM**, or **NOLAN**, shall be assigned the appropriate **Procedural SID**.  Other aircraft shall be assigned a visual departure.

## VFR Operations

### Circuit Direction

| Runway | Day | Night |
| ------ | ------ | ----|
| 14L     | Left  | - |
| 14R    | Right | Right |
| 32L     | Left  | Left |
| 32R     | Right | - |
| 18     | Left  | - |
| 36     | Left  | - |

## Coordination
### Departures
"Next" Coordination to LTA is required for all deps not assigned a SID.

"Next" Coordination is a procedure where the **LT ADC** controller gives a heads-up to the LTA controller about an impending departure not on a SID. The LTA controller will respond by assigning a visual heading to the aircraft, for the **LT ADC** controller to pass on with their takeoff clearance.

!!! example
    **LT ADC** -> **LT TCU**: "Next, ABC"  
    **LT TCU** -> **LT ADC**: "ABC, Heading 150 Visual"  
    **LT ADC** -> **LT TCU**: "Heading 150 Visual, ABC"   

    **LT ADC**: "ABC, Assigned heading right 150 Visual, Runway 14L, Cleared for Takeoff"  
    **ABC**: "Right heading 150 Visual, Runway 12, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

The LTA controller can suspend/resume Auto Release at any time, with the concurrence of **LT ADC**.

!!! Note
    "Next" Coordination to LTA is not required for aircraft assigned a **Procedural SID** and the Standard Assignable Level.

The controller assuming responsibility of **LT ACD** shall give heads-up coordination to LTA controller prior to the issue of the following clearances:  
a) VFR Departures  
b) Aircraft using a runway not on the ATIS  

The Standard Assignable level from LT ADC to LTA is:  
For Jets: `A080`  
For Non-Jets: The lower of `A045` or the `RFL`.
### Arrivals
LTA will coordinate all YMLT arrivals to LT ADC prior to 5 mins from the boundary.