---
  title: Alice Springs (ASP)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Alice Springs** | **Melbourne Centre** | **128.850** | **ML-ASP_CTR** |
| Alice Springs West† | Melbourne Centre | 131.800 | ML-ASW_CTR |
| Warburton† | Melbourne Centre | 124.900 | ML-WAR_CTR |
| Forest† | Melbourne Centre | 132.700 | ML-FOR_CTR |
| Woomera† | Melbourne Centre | 132.900 | ML-WRA_CTR |
| Bourke† | Melbourne Centre | 128.200 | ML-BKE_CTR |
| Esperance† | Melbourne Centre | 123.950 | ML-ESP_CTR |

† **Non-standard position** – may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf){target=new}

## Airspace
 
ASP is responsible for **ASP**, **ASW**, **WAR**, **FOR**, **WRA**, **BKE**, and **ESP** when they are offline.  

Class D and C SFC-F125 within 80 DME AS reverts to Class G when **AS TWR** is offline, and is administered by ASP.  
Class C F125-F245 within 80 DME AS reverts to Class E when **AS TWR** is offline, and is administered by ASP.  

(vatsys map)

## Extending
As per [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf){target=new}, ML-ASP_CTR is only permitted to extend to adjacent **YMMM** sectors.

## Coordination
### ASP (All) / ENR

As per [Standard coordination procedures](http://sops.vatpac.org/controller-skills/coordination/#enr-enr){target=new}, Voiceless, no changes to route or CFL within **20nm** to boundary.

### ASP/ASW/WAR/FOR/WRA/BKE/ESP Internal

As per [Standard coordination procedures](http://sops.vatpac.org/controller-skills/coordination/#enr-enr){target=new}, Voiceless, no changes to route or CFL within **20nm** to boundary.

### ASP / AS TWR

#### Taxi Call
A taxi call shall be made between **AS TWR** and ASP as an aircraft is given taxi clearance. ASP will respond by acknowledging the callsign and activating FDR.

!!! example
    **AS TWR** -> **ASP**: "Taxis QFA797 for YMML via ELLOW3 departure"  
    **ASP** -> **AS TWR**: "QFA797"  

#### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. ASP will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **AS TWR** -> **ASP**: "Next QFA797"  
    **ASP** -> **ASP**: "QFA797"    

#### Departure Call
A departure call should be made as the aircraft becomes airborne. The aircraft should be transferred to ASP as they climb through the upper level of the AS CTR class D airspace.

!!! example
    **AS TWR** -> **ASP**: "Departure QFA797 at 06"  
    **ASP** -> **AS TWR**: "QFA797"

#### Arrival Coordination
ASP will coordinate all arrivals into Alice Springs Prior to handing over to tower in the following format:

- Callsign
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **ASP** -> **AS TWR**: "JST734, estimates Alice Springs 52, 189 radial, 5000ft, number 2”  
    **AS TWR** -> **ASP**: "JST734"

#### Standard Assignable Levels

The Standard assignable level from ASP to **AS TWR** is `A080`.  

The Standard assignable level from **AS TWR** to ASP is the lower of `A080` or the `RFL`.  

### WRA / WR TWR

Reserved. Can we get some RAAF insight for this?