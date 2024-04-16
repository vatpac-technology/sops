---
  title: Pingelly (PIY)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Pingelly** | Melbourne Centre | 133.900 | ML-PIY_CTR |
| Cross† | Melbourne Centre | 135.800 | ML-CRS_CTR |
| Hyden† | Melbourne Centre | 118.200 | ML-HYD_CTR |
| Jarrah† | Melbourne Centre | 120.300 | ML-JAR_CTR |
| Leeman† | Melbourne Centre | 122.400 | ML-LEA_CTR |
| Grove† | Melbourne Centre | 133.800 | ML-GVE_CTR |
| Geraldton† | Melbourne Centre | 134.200 | ML-GEL_CTR |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies)

### CPDLC

The Primary Communication Method for PIY is [CPDLC](../../controller-skills/cpdlc.md).

The CPDLC Station Code is `YPIY`.

Voice may be used in lieu when applicable.

## Airspace
<figure markdown>
![Pingelly Airspace](../assets/piy.png){ width="700" }
  <figcaption>Pingelly Airspace</figcaption>
</figure>

## Sector Responsibilities
### Pingelly (PIY)
PIY will provide final sequencing actions to ensure aircraft comply with their FF times prior to entering the Perth TCU. PIY is also responsible for issuing STAR Clearances for aircraft bound for YPJT, and Non-jets bound for YPPH and YPEA. See [Perth Runway Modes](#perth-runway-modes) for runway assignment.

For aircraft overflying the PH TCU place `O/FLY` in the LABEL DATA field.

### Leeman (LEA)
LEA is responsible for assigning and issuing STAR clearance to aircraft inbound to Perth via `IPMOR`. See [Perth Runway Modes](#perth-runway-modes) for runway assignment.

!!! note
    Controllers should be aware that VHF coverage near the LEA/IND border may be limited. Controllers should strive to issue HF frequencies and transfer of communications instruction prior to 160 NM PH DME.

### Grove (GVE)
GVE is responsible for assigning and issuing STAR clearance to Jet aircraft inbound to Perth via `JULIM` and `SAPKO`.  See [Perth Runway Modes](#perth-runway-modes) for runway assignment.

### Hyden (HYD)
HYD is responsible for assigning and issuing STAR clearance to Jet aircraft inbound to Perth via `BEVLY`, `DAYLR` and `GRENE`. See [Perth Runway Modes](#perth-runway-modes) for runway assignment.

### Cross (CRS) / Geraldton (GEL)
Just keeping them separated!

### Jarrah (JAR)
JAR is responsible for assigning and issuing arrival clearance to aircraft inbound to Perth via `SOLUS`. See [Perth Runway Modes](#perth-runway-modes) for runway assignment.

!!! note
    Controllers should be aware there may be limited ADS-B coverage around Albany (YABA). Expect some areas of Class E airspace to be outside surveillance coverage. [Procedural Standards](../../../separation-standards/procedural) may need to be used in these cases.

### Perth Runway Modes
#### Southwest Plan
With the Southwest Plan active, arrivals shall be processed to either runway 21 or 24 based on their feeder fix, as per the table below:

| Feeder Fix | Assigned Runway |
| --- | --- |
| JULIM | 21 |
| SAPKO | 21 |
| IPMOR | 21 |
| BEVLY | 24 (or 21 if operationally required) |
| GRENE | 24 |
| SOLUS | 24 |

#### Northeast Plan
With the Northeast Plan active (runways 03 and 06 in use), all arrivals shall be processed to runway 03.

## STAR Clearance Expectation

### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| GVE, CRS, HYD | PIY | YPPH, YPEA | Non-jets only |
| GVE, CRS, HYD | PIY | YPJT | |
| GEL | LEA | YPPH | |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| OLW(MEK, MTK, MZI) | GVE, HYD | YPPH, YPEA | Jets only |
| ASP(ESP) | HYD | YPPH, YPEA | Jets only |
| GVE, CRS, HYD | PIY | YPPH, YPEA | Non-jets only |
| GVE, CRS, HYD | PIY | YPJT | |
| GEL, IND | LEA | YPPH | |

## Coordination
### PH TCU
#### Airspace
The PH TCU is responsible for the airspace within 36 DME of the PH VOR, `SFC` to `F245`. 

Refer to [Perth TCU Airspace Division](../../../terminal/perth/#airspace-division) for information on airspace divisions when **PHD** is online.

!!! note
    A significant portion of the TMA airspace south of the PH VOR (roughly 20 DME onwards) is classified Class E with a lower limit of `F125`. Aircraft arriving from this direction from `F130` and above shall be instructed to leave and re-enter controlled airspace on descent to the standard assignable level (or other appropriate altitude).

#### Arrivals/Overfliers
The Standard Assignable level from PIY(All) to PH TCU is `A090` and assigned the relevant STAR. 

All other aircraft must be voice coordinated to PH TCU prior to **20nm** from the boundary.

#### Departures
The Standard Assignable level from PH TCU to PIY(All) is the lower of `F180` or the `RFL`.

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### PIY Internal
Changes to CFL are permitted up to the boundary from GVE, CRS and HYD to PIY.

All else is Voiceless, no changes to route or CFL within **20nm** to boundary.

That being said, it is *advised* that PIY(All) gives **Heads-up Coordination** prior to **20nm** in the following scenarios:  
- JAR to PIY for all aircraft  
- LEA to PIY for all aircraft  

### IND (Oceanic)
As per [Standard coordination procedures](../../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.
