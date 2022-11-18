---
  title: Armidale (ARL)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Armidale** | **Brisbane Centre** | **130.900** | **BN-ARL_CTR** |
| Mudgee† | Brisbane Centre | 133.000 | BN-MDE_CTR |
| Cessnock† | Brisbane Centre | 123.400 | BN-CNK_CTR |
| Manning† | Brisbane Centre | 130.100 | BN-MNN_CTR |
| Maitland† | Brisbane Centre | 123.350 | BN-MLD_CTR |
| Ocean† | Brisbane Centre | 128.600 | BN-OCN_CTR |

† **Non-standard position** – may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf)

## Airspace

ARL is responsible for **MDE**, **CNK**, **MNN**, **MLD**, and **OCN** when they are offline.  

When **TW TWR** is offline, TW CTR (Class D and C SFC-A085) reverts to Class G, and is administered by ARL and MDE. Alternatively, ARL (not MDE) may provide a top-down procedural service if they wish (not recommended).  
When **CFS TWR** is offline, CFS CTR (Class D SFC-A045) reverts to Class G, and is administered by MNN and INL. MNN is **not permitted** to provide a top-down procedural service, only INL can do this, and they must coordinate with MNN if they are doing so.

(vatsys map)

## Sector Responsibilities
### Armidale (ARL) / Manning (MNN)
ARL and MNN are responsible for initial sequencing, issuing STAR Clearances, and issuing initial descent for aircraft bound for YSSY, via BOREE and MEPIL respectively.
### Cessnock (CNK) / Maitland (MLD)
CNK and MLD are responsible for final sequencing for aircraft bound for YSSY, via BOREE and MEPIL respectively.
### Mudgee (MDE)
Just keeping them separated!
### Ocean (OCN)
OCN responsible for sequencing, issuing STAR Clearances, and issuing descent for aircraft bound for YSSY via MARLN.
## Coordination
### ARL (All) / SY TCU

The Standard assignable level from ARL(All) to SY TCU is:  
`A100` for aircraft tracking via BOREE or MARLN, and assigned the relevant STAR  
`A090` for aircraft tracking via MEPIL, and assigned the MEPIL # STAR  

All other aircraft must be voice coordinated to SY TCU prior to **20nm** from the boundary.

The Standard Assignable level from SY TCU to ARL(All) is the lower of `F280` or the `RFL`, and tracking 

Refer to [Sydney TCU Airspace Division](../../sydney/operations/#airspace-division) for information on airspace divisions when **SAS**, **SDN** and/or **SDS** are online.

### ARL (All) / ENR

As per [Standard coordination procedures](../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

### ARL/MDE/CNK/MNN/MLD/OCN Internal

As per [Standard coordination procedures](../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

That being said, it is *advised* that ARL(All) gives **Heads-up Coordination** in the following scenarios:   
- MNN to ARL for all aircraft  
- ARL to MNN for all aircraft  
- CNK to MLD for all aircraft  
- MLD to CNK for all aircraft

### ARL/MDE / TW TWR
#### Airspace
When **TW TWR** is online, **ARL** owns the Class C airspace from A065 upwards. **TW TWR** owns the Class D airspace SFC-A045 and Class C airspace A045-A065.

#### Departures
Departures from YSTW in to ARL/MDE Class C will be coordinated at taxi, and ready for departure. If a level other than the Standard Assignable is required from ARL/MDE, they will coordinate this at the "Next" call.

!!! example
    **TW TWR** -> **MDE**: "Taxi, SKV for YMOR DCT"  
    **MDE** -> **TW TWR**: "SKV"  
    ...  
    **TW TWR** -> **MDE**: "Next, SKV"  
    **MDE** -> **TW TWR**: "SKV"  

The Standard Assignable level from **TW TWR** to ARL/MDE is the lower of `A070` or the `RFL`.

#### Arrivals
The Standard Assignable level from ARL/MDE to **TW TWR** is `A080`. Any aircraft that will not be assigned the Standard Assignable level must have that level concurred by **TW TWR**.  
As per [Standard coordination procedures](../../controller-skills/coordination/#enrtcu-class-d-twr), YSTW arrivals shall be coordinated to **TW TWR** from ARL/MDE prior to transfer of jurisdiction.

!!! example
    **ARL** -> **TW TWR**: "QLK6D, via MATLA DCT STWWD, Number 1"  
    **TW TWR** -> **ARL**: "QLK6D, Number 1"  

!!! caution
    It is the responsibility of **TW TWR** to manage the sequence in to YSTW. This can be challenging, as it involves transitioning from **Radar** standards to **Procedural** standards. ARL/MDE can greatly assist with this however, with use of Radar/ADSB tools, getting coordination done early, and ensuring any aircraft within **10 minutes** arrival time at YSTW, are assigned a *vertically separated level* at handoff to **TW TWR**. For example:  
    **QLK123D** ETA TW 0158, Number 1, A080  
    **HDSN45** ETA TW 0200, Number 2, A090  
    **VUT** ETA TW 0207, Number 3, A100  

### MNN / CFS TWR
#### Airspace
When **CFS TWR** is online, **INL** and **MNN** owns the Class C airspace from A045 upwards, and **CFS TWR** owns the Class D airspace SFC-A045.

#### Departures
Departures from YCFS in to MNN Class C will be coordinated at taxi, and ready for departure. If a level other than the Standard Assignable is required from MNN, they will coordinate this at the "Next" call.

!!! example
    **CFS TWR** -> **MNN**: "Taxi, CFH21 for YSTW via LOSKU"  
    **MNN** -> **CFS TWR**: "CFH21"  
    ...  
    **CFS TWR** -> **MNN**: "Next, CFH21"  
    **MNN** -> **CFS TWR**: "CFH21"  

The Standard Assignable level from **CFS TWR** to MNN is the lower of `A070` or the `RFL`.

#### Arrivals
The Standard Assignable level from MNN to **CFS TWR** is `A080`. Any aircraft that will not be assigned the Standard Assignable level must have that level concurred by **CFS TWR**.  
YCFS arrivals shall be coordinated to **CFS TWR** from MNN prior to transfer of jurisdiction.

!!! example
    **MNN** -> **CFS TWR**: "RXA6438, via KADSI, Number 1"  
    **CFS TWR** -> **MNN**: "RXA6438, Number 1"  

!!! caution
    It is the responsibility of **CFS TWR** to manage the sequence in to YCFS. This can be challenging, as it involves transitioning from **Radar** standards to **Procedural** standards. MNN/INL can greatly assist with this however, with use of Radar/ADSB tools, getting coordination done early, and ensuring any aircraft within **10 minutes** arrival time at YCFS, are assigned a *vertically separated level* at handoff to **CFS TWR**. For example:  
    **QLK123D** ETA CFS 0732, Number 1, A080  
    **BNZ456** ETA CFS 0736, Number 2, A090  
    **ABC** ETA CFS 0739, Number 3, A100  

### CNK/MND/MNN / WLM APP
#### Airspace
By default, **WLM APP** owns the airspace within the **R578A-G** restricted areas, unless stated otherwise by ad-hoc release or NOTAM.
#### Departures
Departures from YWLM in to CNK/MND/MNN Class C will be coordinated at taxi, and will be requesting a level.

!!! example
    **WLM APP** -> **MNN**: "Taxi, WGTL33 for YPTN via BUBRI1A departure, Requesting F380"  
    **MNN** -> **WLM APP**: "WGTL33, F120"  
    **WLM APP** -> **MNN**: "F120, WGTL33"  

#### Arrivals/Overfliers
All aircraft transiting from CNK/MND/MNN to **WLM APP** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **WLM APP** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the CNK/MND/MNN and **WLM APP** controller agree on.

!!! example
    **MNN** -> **WLM APP**: "via SANAD, JST458, DCT BLAFF, will be assigned F130"  
    **WLM APP** -> **MNN**: "JST458, F130"  

### OCN/MNN / TSN (Oceanic)

As per [Standard coordination procedures](../../controller-skills/coordination/#enr-oceanic), Voice coordinate estimate and level prior to **15 mins** to boundary.