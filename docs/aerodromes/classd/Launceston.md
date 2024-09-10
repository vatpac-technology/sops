---
  title: Launceston (YMLT)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name              | Callsign       | Frequency        | Login Identifier                         |
| ----------------- | -------------- | ---------------- | ---------------------------------------- |
| Launceston ADC    | Launy Tower   | 118.700    | LT_TWR                         |
| Launceston ATIS       |                | 134.750          | YMLT_ATIS                                |

## Airspace
LT ADC is responsible for the Class D airspace in the LT CTR `SFC` to `A015`.

<figure markdown>
![Launceston Tower Airspace](img/LTTWR.png){ width="700" }
</figure>

Refer to [Class D Tower Separation Standards](../../../separation-standards/classd) for more information.

## SID Selection
Aircraft planned via **MIKIS**, **TASUM**, or **VEKLO** shall be assigned the relevant Procedural SID.

Aircraft planned via **IRSOM**, **MORGO**, **ONAGI**, **VIMAP**, **NUNPA**, or **MOTRA**, departing Runway 32L, shall be assigned the relevant **ALPHA** Procedural SID.

Aircraft planned via **ONAGI**, **VIMAP**, **NUNPA**, or **MOTRA**, departing Runway 14R, shall be assigned the relevant **BRAVO** Procedural SID.

**Non-Jet** Aircraft planned via **IRSOM**, **ONAGI**, or **MORGO** may be assigned the relevant **CHARLIE** Procedural SID *on pilot request*.

Aircraft **not** planned via any of the above waypoints, shall be recleared via the most appropriate one, and assigned the **Procedural SID**.

Aircraft unable to accept a SID, or that cannot practically accept amended routing via the above points, shall be assigned the **RADAR SID**.

## ATIS
YMLT ATIS identifiers range from `A` to `M`, as YMHB uses `N` through `Y`.

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
'Next' coordination is not required to LTA for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a SID

All other aircraft require a 'Next' call to LTA.

!!! example
    <span class="hotline">**LT ADC** -> **LTA**</span>: "Next, ABC, runway 14L"  
    <span class="hotline">**LTA** -> **LT ADC**</span>: "ABC, Heading 150 Visual, unrestricted"  
    <span class="hotline">**LT ADC** -> **LTA**</span>: "Heading 150 Visual, ABC"   

    **LT ADC**: "ABC, turn right heading 150 Visual, Runway 14L, Cleared for Takeoff"  
    **ABC**: "Right heading 150 Visual, Runway 12, Cleared for Takeoff, ABC"

The LTA controller can suspend/resume Auto Release at any time, with the concurrence of **LT ADC**.

LT ADC shall give heads-up coordination to LTA controller prior to the issue of the following clearances:  
a) VFR Departures  
b) Aircraft using a runway not on the ATIS  

The Standard Assignable level from LT ADC to LTA is:  
For IFR Aircraft: `A080`  
For VFR Aircraft: The lower of `A045` or the `RFL`.

### Arrivals/Overfliers
LTA will heads-up coordinate arrivals/overfliers from LTA CTA to LT ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to LT ADC, unless LT ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example
    <span class="hotline">**LTA** -> **LT ADC**</span>: "via IRSOM for the DGA, TFW"  
    <span class="hotline">**LT ADC** -> **LTA**</span>: "TFW, DGA"  
