---
  title: Huon (HUO)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| Huon | Melbourne Centre | 122.600 | ML-HUO_CTR |

### CPDLC

The Primary Communication Method for HUO is Voice.

[CPDLC](../../../client/cpdlc) may be used in lieu when applicable.

The CPDLC Station Code is `YHUO`.

!!! tip
    Even though HUO's Primary Communication Method is Voice, CPDLC may be used for Overfliers.

## Airspace

<figure markdown>
![Huon Airspace](../assets/huo.png){ width="700" }
  <figcaption>Huon Airspace</figcaption>
</figure>

### Reclassifications
#### TAS TCU
When **HBA** and/or **LTA** are offline, the class C and D airspace `SFC` to `A085` in the relevant TMA is reclassified as class G.

HUO may choose to operate either YMHB or YMLT (or both) aerodromes top down, including the terminal airspace within the Tasmania TMA. Due to limited surveillence coverage and the complex airspace setup, **extending top down to one or both aerodromes is not compulsory.**

If HUO chooses to operate top down to either aerodrome, they must administer all relevant airspace within the appropriate TMA, including the class D CTR.

!!! important
    Ensure you are familiar with the aerodrome procedures for [Launceston](../../../aerodromes/Launceston) and [Hobart](../../../aerodromes/Hobart) before extending top down, and are aware of the limited surveillence coverage available in the lower levels of the TMA.

## Responsibilities
HUO is reponsible for issuing STAR clearances, sequencing, and descent for aircraft bound for YMLT and YMHB.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| HUO | YWE(WON) | YMML | |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| YWE(WON), ELW(SNO) | HUO | YMHB | |

## Coordination
### TAS TCU
#### Airspace
**LTA** owns the airspace `SFC` to `F245` within a 30nm radius of the LT VOR. LT ADC owns the Class D airspace within LT CTR `SFC` to `A015` when open.  

**HBA** owns the airspace `SFC` to `F245` within the remainder of the Tasmania TMA (shown below). HB ADC owns the Class D airspace within HB CTR `SFC` to `A015` (north of runway centreline) and `A025` (south of runway centreline) when open. 

Refer to [Reclassifications](#tas-tcu) for operations when HBA and/or LTA are offline.

##### LTA Release
The Airspace on and west of the IRSOM-MORGO track `F125`-`F245` is permanently released from LTA to HUO, unless coordinated otherwise. [Boundary Coordination](../../../controller-skills/coordination/#boundary) is not required to LTA for aircraft on this track assigned at or above `F130`.

<figure markdown>
![LTA Release](../assets/ltarls.png){ width="500" }
  <figcaption>LTA Release</figcaption>
</figure>

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YMLT** 
  - Tracking from **IRSOM** or **NUNPA** DCT **LT**; and  
  - Assigned `A090`  
- With ADES **YMHB** 
  - Assigned the **IPLET** or **MORGO** STAR; and  
  - Assigned `F130`  

All other aircraft coming from HUO CTA must be **Heads-up** Coordinated to TAS TCU prior to **20nm** from the boundary.

#### Departures
Voiceless for all aircraft:

- Assigned the lower of `F240` or the `RFL`; and  
- Tracking via a Procedural SID terminus

All other aircraft going to HUO CTA will be **Heads-up** Coordinated by TAS TCU.

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### TSN/IND(INS) (Oceanic)
As per [Standard coordination procedures](../../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.