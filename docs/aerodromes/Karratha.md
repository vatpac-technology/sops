---
  title: Karratha (YPKA)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Karratha SMC | Karratha Ground | 123.550 | KA_GND |
| Karratha ADC | Karratha Tower | 127.350 | KA_TWR |
| Karratha ATIS | N/A | 128.350 | YBAS_ATIS |

## Airspace

<figure markdown>
![YPKA Airspace](img/ypka_airspace.png){ width="700" }
  <figcaption>YPKA Airspace</figcaption>
</figure>

## Surveillance
KA TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the KA CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.
## Coordination
### KA ADC / ENR

#### Taxi Call
A taxi call shall be made between KA TWR and BN CTR A an aircraft is given taxi clearance. Center will respond by acknowledging the callsign and activating FDR.

!!! example
    **KA_TWR** -> **ML-OLW_CTR**: "Taxis NWK694 for YPPH via COBRA"  
    **ML-OLW_CTR** -> **KA_TWR**: "NWK694"  

#### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. Center will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **KA_TWR** -> **ML-OLW_CTR**: "Next NWK694"  
    **ML-OLW_CTR** -> **KA_TWR**: "NWK694"    

#### Departure Call
A departure call should be made as the aircraft becomes airborne. If not already issued, CTR will issue a higher level. The aircraft should be transferred to CTR as they climb through the upper level of the KA class D airspace.

!!! example
    **KA_TWR** -> **ML-OLW_CTR**: "Departure NWK694 at 06"  
    **ML-OLW_CTR** -> **KA_TWR**: "NWK694, FL360"
    **KA_TWR** -> **ML-OLW_CTR**: "FL360, NWK694" 
#### Arrival Coordination
ML-OLW_CTR will coordinate all arrivals into Karratha Prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **ML-OLW_CTR** -> **KA_TWR**: "JST734, A320, estimates Karratha 52, 189 radial, 5000ft, number ”
    **KA_TWR** -> **ML-OLW_CTR**: "JST734"

## Standard Assignable Levels

Aircraft departing from Karratha shall be assigned `A050` or `RFL` if lower.

Aircraft arriving into Karratha shall be assigned `A060`.