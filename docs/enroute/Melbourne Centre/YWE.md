---
  title: Yarrowee (YWE)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Yarrowee** | **Melbourne Centre** | **134.325** | **ML-YWE_CTR** |
| Mungo† | Melbourne Centre | 132.600 | ML-MUN_CTR |
| Oxley† | Melbourne Centre | 128.500 | ML-OXL_CTR |
| Griffith† | Melbourne Centre | 122.750 | ML-GTH_CTR |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}

### CPDLC

The Primary Communication Method for YWE is Voice.

[CPDLC](../../../client/cpdlc) may be used in lieu when applicable.

The CPDLC Station Code is `YYWE`.

!!! tip
    Even though YWE's Primary Communication Method is Voice, CPDLC may be used for Overfliers.

## Airspace

<figure markdown>
![Yarrowee Airspace](../assets/ywe.png){ width="700" }
  <figcaption>Yarrowee Airspace</figcaption>
</figure>

## Sector Responsibilities
### Yarrowee (YWE)
YWE is responsible for the final sequencing actions in to YMML.

### Mungo (MUN)
MUN is responsible for issuing STAR Clearances for aircraft arriving at YMML. MUN will also initiate sequencing as required for aircraft arriving at YMML and YPAD.

### Oxley (OXL)
OXL is responsible for issuing STAR Clearances for aircraft arriving at YMML. OXL will also initiate sequencing as required for aircraft arriving at YMML.

### Griffith (GTH)
GTH is responsible for issuing STAR Clearances for YSSY.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| MUN | TBD | YPAD, YPED | |
| GTH | OXL | YMML, YMAV | |
| OXL | ELW(BLA) | YSCB | |
| GTH | BIK(GUN) | YSSY | |
| OXL | GTH | YSSY | |


### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| TBD | MUN | YMML, YMAV | |
| ASP(BKE), GTH | OXL | YMML, YMAV | |
| ASP(BKE) | GTH, BIK(KAT) | YSSY | |
| OXL | GTH | YSSY | |
| ARL(MDE) | BIK(KAT) | YSCB | |

## Coordination
### ML TCU
#### Airspace
The Vertical limits of the ML TCU are `SFC` to `F245`.

Refer to [Melbourne TCU Airspace Division](../../../terminal/melbourne/#airspace-division) for information on airspace divisions when **MDN** and/or **MDS** are online.

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YMML**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from YWE CTA must be **Heads-up** Coordinated to ML TCU prior to **20nm** from the boundary.

#### Departures
Voiceless to all surrounding Enroute sectors for all aircraft:
 
- Assigned the lower of `F240` or the `RFL`; and
- Tracking via any of the following:
    - a Procedural SID terminus
    - **DOTPA**
    - **OMKON**
    - **AV**

All other aircraft going to YWE CTA will be **Heads-up** Coordinated by ML TCU.

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

That being said, it is *advised* that YWE(All) gives **Heads-up Coordination** prior to **50nm** from the boundary in the following scenarios:  
- YWE to ELW/BLA for all aircraft  
- GTH to ELW(BLA) for all aircraft  
- YWE to HUO(WON) for all aircraft  

!!! tip
    **MUN** should aim to handoff aircraft as soon as possible to **TBD**, so they can issue STAR clearance and commence sequencing. Remember, As per [Standard coordination procedures](../../../controller-skills/coordination/#handoffs), the Receiving sector may turn the aircraft 45° left or right and climb/descend to any level. So if required, nominate a restriction.

### YWE Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

That being said, it is *advised* that YWE(All) gives **Heads-up Coordination** prior to **50nm** in the following scenarios:  
- MUN to YWE for aircraft **not** on the Y12 or H119 airway (Changes permitted up to boundary for sequencing/descent purposes)  
- OXL to YWE for aircraft **not** tracking via CANTY (Changes permitted up to boundary for sequencing/descent purposes)  