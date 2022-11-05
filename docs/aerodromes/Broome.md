---
  title: Broome (YBRM)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Broome ADC | Broome Tower | 123.250 | BRM_TWR |
| Broome SMC | Broome Ground | 121.800 | BRM_GND |
| Broome ATIS | N/A | 133.850 | YBRM_ATIS |

## Airspace

<figure markdown>
![YBRM Airspace](img/ybrm_airspace.png){ width="700" }
  <figcaption>YBRM Airspace</figcaption>
</figure>

### AY ADC / ENR

#### Taxi Call
A taxi call shall be made between AY TWR and ML CTR as an aircraft is given taxi clearance. Center will respond by acknowledging the callsign and activating FDR.

!!! example
    **AY_TWR** -> **ML-BLA_CTR**: "Taxis QFA400 for YSSY via MUSOP"  
    **ML-BLA_CTR** -> **AY_TWR**: "QFA400"  

#### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. Center will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **AY_TWR** -> **ML-BLA_CTR**: "Next QFA400"  
    **ML-BLA_CTR** -> **AY_TWR**: "QFA400, FL320"  
    **AY_TWR** -> **ML-BLA_CTR**: "FL320, QFA400"  

#### Departure Call
A departure call should be made as the aircraft becomes airborne. If not already issued, CTR will issue a higher level. The aircraft should be transferred to CTR as they climb through the upper level of the AY class D airspace.

!!! example
    **AY_TWR** -> **ML-BLA_CTR**: "Departure QFA400 at 06"  
    **ML-BLA_CTR** -> **AY_TWR**: "QFA400"

#### Arrival Coordination
ML-BLA_CTR will coordinate all arrivals into Albury Prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **ML-BLA_CTR** -> **AY_TWR**: "JST416, A320, estimates Albury 52, ARRAN1 arrival, 5000ft, number 1”
    **AY_TWR** -> **ML-BLA_CTR**: "JST416"

## Standard Assignable Level
All aircraft departing from YBRM shall be assigned `A060` or `RFL` if lower.
