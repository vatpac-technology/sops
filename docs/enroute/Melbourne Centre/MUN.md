---
  title: Mungo (MUN)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Mungo** | **Melbourne Centre** | **132.600** | **ML-MUN_CTR** |
| <span class="indented">Yarrowee :material-information-outline:{ title="Non-standard position"} | Melbourne Centre | 134.325 | ML-YWE_CTR |
| <span class="indented">Oxley :material-information-outline:{ title="Non-standard position"} | Melbourne Centre | 128.500 | ML-OXL_CTR |
| <span class="indented">Griffith :material-information-outline:{ title="Non-standard position"} | Melbourne Centre | 122.750 | ML-GTH_CTR |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

### CPDLC
The Primary Communication Method for MUN is Voice.

[CPDLC](../../../client/cpdlc) may be used in lieu when applicable.

The CPDLC Station Code is `YMUN`.

!!! tip
    Even though MUN's Primary Communication Method is Voice, CPDLC may be used for Overfliers.

## Airspace

<figure markdown>
![Mungo Airspace](../assets/mun.png){ width="700" }
  <figcaption>Yarrowee Airspace</figcaption>
</figure>

## Sector Responsibilities
### Yarrowee (YWE)
#### YMML Arrivals
YWE is responsible for final sequencing and descent.

#### YMEN Arrivals
YWE is responsible for issuing final descent, and ascertaining arrival intentions.

### Mungo (MUN)
#### YMML Arrivals
MUN is reponsible for issuing STAR clearances, initial sequencing, and initial descent to not below `F250` for Jets.

### Oxley (OXL)
#### YMML Arrivals
OXL is reponsible for issuing STAR clearances, initial sequencing, and initial descent to not below `F250` for Jets.

### Griffith (GTH)
#### YSSY Arrivals
GTH is responsible for issuing STAR Clearances for Jets.

### Sequencing in to YMML

## Predictable Sequencing
Predictable Sequencing is used instead of vectoring, and involves ATC re-routing aircraft via pre-defined waypoints positioned off major airways to provide a certain time delay.```

There are four Predictable Sequencing waypoints available for aircraft inbound YMML via **Q29**, located south of the airway. Aircraft must comply with STAR speed and level restrictions unless explicitly cancelled by ATC.```

The table below contains the estimated time from the initial waypoint to the final waypoint **via the CDO waypoint**. I.e., the estimated delay if an aircraft is re-routed via that CDO waypoint.
=== "Q29"
    | Initial Waypoint | CDO Waypoint | Final Waypoint | Minutes|
    | -----------------| -------------| -------------- | -------|
    | ANLID | DOVEX | BULLA | 2 |
    | ANLID | TOPUL | BULLA | 4 |
    | ANLID | UNSIG | BULLA | 6 |
    | ANLID | NILEV | BULLA | 8 | 

<figure markdown>
![Q29 Waypoints and Delays](img/cdo_bulla.png){ width="500" }
  <figcaption> Q29 Waypoints and Delays </figcaption>
</figure>

#### Holding Fixes
Refer to the vatSys Enroute Holds map for details of published holds on the airways inbound to YMML. Where delays necessitate holding, aircraft should be instructed to hold at the following positions. The listed time should be subtracted from an aircraft's assigned feeder fix time to determine when they should leave the hold.

| Feeder Fix | Holding Fix | Time from Hold to Feeder Fix |
| ---- | ---- | ---- |
| ARBEY | METES<br>DORSU | 4 min<br>4 min |
| Others | Feeder Fix | - |

!!! tip
    Additional holding may be performed at upstream holding fixes to reduce controller workload. This is particularly useful when non-standard child sectors have been opened, allowing aircraft to absorb some of their delay in the previous sector. 

#### LAHSO
!!! warning "Important"
    Due to its operational complexity, LAHSO **must be authorised by a senior VATPAC staff member or a nominated event coordinator**.

In accordance with the authorisation requirements above, YMML may utilise LAHSO during exceptionally busy events. Detailed procedures exist to ensure that controllers are aware of their responsibilities when performing LAHSO. See [Controller Skills](../../controller-skills/runwaymanagement.md#lahso) for more information.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| MUN | TBD | YPAD, YPED | |
| GTH | OXL | YMML, YMAV | |
| OXL | BLA | YSCB | |
| GTH | GUN | YSSY | Non-Jets only |
| OXL | GTH | YSSY | Jets only |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| TBD | MUN | YMML, YMAV | |
| ASP(BKE), GTH | OXL | YMML, YMAV | |
| ASP(BKE) | GTH, GUN(KAT) | YSSY | Jets only |
| OXL | GTH | YSSY | Jets only |
| ARL(MDE) | GUN(KAT) | YSCB | |

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

That being said, it is *advised* that MUN(All) gives **Heads-up Coordination** prior to **50nm** from the boundary in the following scenarios:  
- YWE to ELW/BLA for all aircraft  
- GTH to BLA for all aircraft  
- YWE to HUO(WON) for all aircraft

!!! tip
    **MUN** should aim to handoff aircraft as soon as possible to **TBD**, so they can issue STAR clearance and commence sequencing. Remember, As per [Standard coordination procedures](../../../controller-skills/coordination/#handoffs), the Receiving sector may turn the aircraft 45° left or right and climb/descend to any level. So if required, nominate a restriction.

### MUN Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

That being said, it is *advised* that MUN(All) gives **Heads-up Coordination** prior to **50nm** in the following scenarios:  
- MUN to YWE for aircraft **not** on the Y12 or H119 airway (Changes permitted up to boundary for sequencing/descent purposes)  
- OXL to YWE for aircraft **not** tracking via DORSU (Changes permitted up to boundary for sequencing/descent purposes)
