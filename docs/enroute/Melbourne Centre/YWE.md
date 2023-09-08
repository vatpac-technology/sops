---
  title: Yarrowee (YWE)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Yarrowee** | **Melbourne Centre** | **134.325** | **ML-YWE_CTR** |
| Wonthaggi† | Melbourne Centre | 135.300 | ML-WON_CTR |
| Mungo† | Melbourne Centre | 132.600 | ML-MUN_CTR |
| Oxley† | Melbourne Centre | 128.500 | ML-OXL_CTR |
| Griffith† | Melbourne Centre | 122.750 | ML-GTH_CTR |
| Katoomba† | Melbourne Centre | 133.500 | ML-KAT_CTR |

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)

## Airspace

<figure markdown>
![Yarrowee Airspace](../assets/ywe.png){ width="700" }
  <figcaption>Yarrowee Airspace</figcaption>
</figure>

## Sector Responsibilities
### Yarrowee (YWE)
YWE is responsible for the final sequencing actions in to YMML.

### Wonthaggi (WON)
WON is responsible for issuing STAR Clearances for aircraft arriving at YMML. WON will also initiate sequencing as required for aircraft arriving at YMML.

### Mungo (MUN)
MUN is responsible for issuing STAR Clearances for aircraft arriving at YMML. MUN will also initiate sequencing as required for aircraft arriving at YMML and YPAD.

### Oxley (OXL)
OXL is responsible for issuing STAR Clearances for aircraft arriving at YMML. OXL will also initiate sequencing as required for aircraft arriving at YMML.

### Griffith (GTH)
Just keeping them separated!

### Katoomba (KAT)
KAT is responsible for issuing STAR Clearances for YSCB and YSSY.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| MUN | TBD | YPAD, YPED | |
| GTH | OXL | YMML, YMAV | |
| OXL | ELW(BLA) | YSCB | |
| GTH | BIK(GUN) | YSSY | |
| WON | HUO | YMHB | |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| TBD | MUN | YMML, YMAV | |
| ASP(BKE), GTH | OXL | YMML, YMAV | |
| HUO | WON | YMML | 
| ASP(BKE) | KAT | YSSY | |
| ARL(MDE) | KAT | YSCB | |

## Coordination

### ML TCU
The Standard assignable level from YWE and WON to ML TCU is `A090`, and assigned the ARBEY #, PORTS #, WAREN #, or WENDY # STAR.

All other aircraft must be voice coordinated to ML TCU prior to **20nm** from the boundary.

The Standard Assignable level from ML TCU to YWE/WON is `F240`, and tracking via CRENA, ESDIG, NEVIS, CORRS, KEPPA, or SUNTI.

Refer to [Melbourne TCU Airspace Division](../../../terminal/melbourne/#airspace-division) for information on airspace divisions when **MDN** and/or **MDS** are online.
### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

That being said, it is *advised* that YWE(All) gives **Heads-up Coordination** prior to **50nm** from the boundary in the following scenarios:  
- YWE to ELW/BLA for all aircraft  
- WON to ELW/BLA for all aircraft  
- GTH to BLA for all aircraft  
- KAT to BIK/GUN for aircraft **not** planned via MAKKA  

!!! tip
    **MUN** should aim to handoff aircraft as soon as possible to **TBD**, so they can issue STAR clearance and commence sequencing. Remember, As per [Standard coordination procedures](../../../controller-skills/coordination/#handoffs), the Receiving sector may turn the aircraft 45° left or right and climb/descend to any level. So if required, nominate a restriction.

### YWE Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

That being said, it is *advised* that YWE(All) gives **Heads-up Coordination** prior to **50nm** in the following scenarios:  
- MUN to YWE for aircraft **not** on the Y12 or H119 airway (Changes permitted up to boundary for sequencing/descent purposes)  
- OXL to YWE for aircraft **not** tracking via CANTY (Changes permitted up to boundary for sequencing/descent purposes)  
- WON to YWE for all aircraft  
- YWE to WON for all aircraft  

### SY TCU
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-tcu), all aircraft must be **Heads-up coordinated** prior to **20nm** from the boundary.  

The Standard Assignable level from SY TCU to KAT is the lower of `F280` or the `RFL`, and tracking via KADOM.

Refer to [Sydney TCU Airspace Division](../../../terminal/sydney/#airspace-division) for information on airspace divisions when **SAS**, **SDN**, **SDS** and/or **SRI** are online.

### ESL TCU
#### Airspace
By default, **ESL TCU** owns the airspace within 30nm ESL, `SFC` to `F200`, unless stated otherwise by ad-hoc release or NOTAM.
#### Departures
Departures from YMES in to WON Class C will be coordinated at taxi, and will be requesting a level.

!!! example
    <span class="coldline">**ESL TCU** -> **WON**</span>: "Taxi, ALDN16 for YFLI DCT, Requesting F230"  
    <span class="coldline">**WON** -> **ESL TCU**</span>: "ALDN16, F230"  
    <span class="coldline">**ESL TCU** -> **WON**</span>: "F230, ALDN16"  

#### Arrivals/Overfliers
All aircraft transiting from WON to **ESL TCU** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **ESL TCU** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the WON and **ESL TCU** controller agree on.

!!! example
    <span class="hotline">**WON** -> **ESL TCU**</span>: "via ANTLA, BFRT23, will be assigned F220, I have no restrictions on descent"  
    <span class="hotline">**ESL TCU** -> **WON**</span>: "BFRT23, F220"  