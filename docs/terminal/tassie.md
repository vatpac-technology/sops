---
  title: Tasmania TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | ---------------------|
| Hobart Approach  | HBA | Hobart Approach  | 125.550       | HB_APP    |
| Launceston Approach  | LTA | Launy Approach   | 123.800        | LT_APP                 |

!!! Note
    HBA may elect to extend to LTA and vice versa, callsigns remain the same. See [Controller Skills](../controller-skills/extending.md) for details.

## Airspace
**LTA** owns the airspace `SFC` to `F245` within a 30nm radius of the LT VOR. LT ADC owns the Class D airspace within LT CTR `SFC` to `A015` when open.  

**HBA** owns the airspace `SFC` to `F245` within the remainder of the Tasmania TMA (shown below). HB ADC owns the Class D airspace within HB CTR `SFC` to `A015` (north of runway centreline) and `A025` (south of runway centreline) when open. 

<figure markdown>
![TAS TCU](img/TASTCU.png){ width="700" }
</figure>

### LTA Release to HUO
The Airspace on and west of the IRSOM-MORGO track `F125`-`F245` is permanently released from LTA to HUO, unless coordinated otherwise.

<figure markdown>
![LTA Release](../img/ltarls.png){ width="500" }
  <figcaption>LTA Release</figcaption>
</figure>

## YMHB
All aircraft should be kept on SIDs and STARs. If due to operational requirements or routing, an aircraft is unable to accept the SID or STAR, voice coordination with HUO will be required.

## YMLT
Visual approaches are preferred into YMLT. If due to operational requirements, an aircraft is unable to accept a visual approach, coordination with **LT ADC** may be required.  

Runway 32L is regularly the duty runway due to prevailing winds. To assist traffic flow in and out of the TCU, ATC will instruct aircraft to track for runway 32L via `IRSOM, NODAS, MLTSC` which keeps the aircraft within CTA and away from the departures stream.

## Coordination

### Enroute
#### Departures
The Standard Assignable level from HBA/LTA to HUO is the lower of `F240` or the `RFL`, and tracking via a SID terminus.

Any aircraft not meeting the above criteria must be prior coordinated to HUO.

!!! example
    <span class="hotline">**LTA** -> **HUO**</span>: "via IRSOM, QFA114, with your concurrence, will be assigned F150, for my separation with ZYX"  
    <span class="hotline">**HUO** -> **LTA**</span>: "QFA114, concur F150"

#### Arrivals
The Standard assignable level from HUO to HBA/LTA is:  
`A090` for YMLT arrivals, tracking `IRSOM DCT LT`, or `NUNPA DCT LT`.  
`F130` for YMHB arrivals, and assigned the IPLET STAR or MORGO STAR.

All other aircraft must be voice coordinated to HBA/LTA.

### HBA
#### Airspace
HB ADC owns the Class D airspace in the HB CTR `SFC` to `A015` north of the runway centreline and `A025` south of the runway centreline. HBA owns the Class D and C airspace above these levels.

#### Departures
HB ADC will give a "Next" call for:

- VFR Departures  
- Aircraft using a runway not on the ATIS
- Aircraft not assigned a Procedural SID and the Standard Assignable level

The Standard Assignable level from HB ADC to HBA is:  
For Jets: `A080`  
For Non-Jets: The lower of `A045` or the `RFL`.

#### Arrivals
HBA will coordinate all YMHB arrivals to HB ADC prior to **5 mins** from the boundary. This coordination shall be as per [Standard Heads-up format](../../controller-skills/coordination/#heads-up), with the addition of:

- Runway, if other than duty runway  
- Approach type, unless specifically nominated on the ATIS  
- IFR Circuit joining instructions, if not on Straight-in instrument approach

!!! example
    <span class="hotline">**HB TCU** -> **HB ADC**</span>: "via BUSKA, QJE1789, for the ILS”  
    <span class="hotline">**HB ADC** -> **HB TCU**</span>: "QJE1789, ILS"

### LTA
#### Airspace
LT ADC owns the Class D airspace in the LT CTR `SFC` to `A015`. LTA owns the Class D and C airspace above `A015`.

#### Departures
LT ADC will give a "Next" call for:

- VFR Departures  
- Aircraft using a runway not on the ATIS  
- Aircraft not assigned a Procedural SID and the Standard Assignable level

The Standard Assignable level from LT ADC to LTA is:  
For Jets: `A080`  
For Non-Jets: The lower of `A045` or the `RFL`.
#### Arrivals
LTA will coordinate all YMLT arrivals to LT ADC prior to **5 mins** from the boundary. This coordination shall be as per [Standard Heads-up format](../../controller-skills/coordination/#heads-up), with the addition of:

- Runway, if other than duty runway  
- Approach type, unless specifically nominated on the ATIS  
- IFR Circuit joining instructions, if not on Straight-in instrument approach

!!! example
    <span class="hotline">**LT TCU** -> **LT ADC**</span>: "via IRSOM, JST416, for the DGA, will join left downwind 32L”  
    <span class="hotline">**LT ADC** -> **LT TCU**</span>: "JST416"