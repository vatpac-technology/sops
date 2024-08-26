---
  title: Tailem Bend (TBD)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Tailem Bend** | **Melbourne Centre** | **123.050** | **ML-TBD_CTR** |
| Augusta† | Melbourne Centre | 127.050 | ML-AUG_CTR |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}

### CPDLC

The Primary Communication Method for TBD is Voice.

[CPDLC](../../../client/cpdlc) may be used in lieu when applicable.

The CPDLC Station Code is `YTBD`.

!!! tip
        Even though TBD's Primary Communication Method is Voice, CPDLC may be used for Overfliers.

## Airspace

<figure markdown>
![Tailem Bend Airspace](../assets/tbd.png){ width="700" }
  <figcaption>Tailem Bend Airspace</figcaption>
</figure>

## Sector Responsibilities
TBD and AUG are responsible for Sequencing, issuing STAR Clearances, and issuing descent for aircraft bound for YPAD and YPED.

### Sequencing in to YPAD
Aircraft assigned the **same runway** inbound via:

- MARGO and AGROS 
- ERITH and KLAVA

Must be considered to be on the **same STAR** for sequencing purposes. That is, they must be at least **2 minutes** apart at their respective Feeder fixes.

### YPAD STARs
Aircraft tracking via OJJAY and MARGO (ie *J251 WHA H84 MARGO*) from the North for Runway 23 shall be assigned:  
**RAYNA** STAR with the **OJJAY** transition  
**not**  
**SALTY** STAR with the **MARGO** transition

vatSys will not necessarily select the correct STAR by default when entering the runway, so ensure the correct STAR is selected.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| TBD | YWE(MUN) | YMML, YMAV | |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| YWE(MUN), ASP(BKE) | TBD | YPAD, YPED| |
| ASP(All) | AUG | YPAD, YPED| Jets only |

## Coordination

### AD TCU
#### Airspace
The Vertical limits of the AD TCU are `SFC` to `F245`.

Refer to [Adelaide TCU Airspace Division](../../../terminal/adelaide/#airspace-division) for information on airspace divisions when **AAW** is online.

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YPAD**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from TBD CTA must be **Heads-up** Coordinated to AD TCU prior to **20nm** from the boundary.

#### Departures
Voiceless for all aircraft:
 
- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F240` or the `RFL`

All other aircraft going to TBD CTA will be **Heads-up** Coordinated by AD TCU.

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr){target=new}, Voiceless, no changes to route or CFL within **50nm** to boundary.

### TBD Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr){target=new}, Voiceless, no changes to route or CFL within **50nm** to boundary.