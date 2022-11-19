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
    Hobart Approach may extend to Launceston Approach and vice versa, callsigns remain the same.

## Airspace
The TAS TCU has an upper limit of FL245 within the following area:

<figure markdown>
![TAS TCU](img/TASTCU.png){ width="700" }
</figure>

HBA is responsible for the provision of ADC and SMC responsibilities when **HB TWR** is offline.  
LTA is responsible for the provision of ADC and SMC responsibilities when **LT TWR** is offline.

## Hobart
All aircraft should be kept on SIDs and STARs. If due to operational requirements or routing, an aircraft is unable to accept the SID or STAR, Voice Coordination with HUO will be required.

## Launceston
Visual approaches are preferred into Launceston. If due to operational requirements, an aircraft is unable to accept a visual approach, Coordination with **LT ADC** may be required.  

Runway 32L is preferred geographically. To assist traffic flow in and out of the TCU, ATC will instruct aircraft to track for 32L via IRSOM, NODAS, MLTSC which keeps the aircraft within CTA and away from the departures stream.

## Coordination

### TAS TCU / ENR
#### Departures
The Standard Assignable level from HBA/LTA to HUO is the lower of `F240` or the `RFL`, and tracking via a SID terminus.

Any aircraft not meeting the above criteria must be prior coordinated to HUO.

!!! example
    **LTA** -> **HUO**: "via IRSOM, QFA114, with your concurrence, will be assigned F150, for my separation with ZYX"  
    **HUO** -> **LTA**: "QFA114, concur F150"  

#### Arrivals
The Standard assignable level from HUO to HBA/LTA is:  
`A090` for YMLT arrivals, tracking IRSOM DCT LT, or NUNPA DCT LT.  
`F130` for YMHB arrivals, and assigned the IPLET # or MORGO # STAR.

All other aircraft must be voice coordinated to HBA/LTA.

### HB ADC / HBA
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
    **HB TCU** -> **HB ADC**: "via BUSKA, QJE1789, for the ILS”  
    **HB ADC** -> **HB TCU**: "QJE1789"

### LT ADC / LTA
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
    **LT TCU** -> **LT ADC**: "via IRSOM, JST416, for the DGA, will join left downwind 32L”  
    **LT ADC** -> **LT TCU**: "JST416"