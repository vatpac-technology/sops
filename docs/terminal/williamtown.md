---
  title: Williamtown TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Williamtown Approach (High)**    | **Willy Approach**   | **133.300**         | **WLM_APP**                                   |
| Williamtown Approach (Low)†    | Willy Approach   | 135.700         | WLM-L_APP                                   |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new} 

## Airspace
### Default
By default, WLM TCU owns the airspace within the WLM MIL CTR `SFC` to `F125`. This may be amended by NOTAM.

When WLM TCU is active above `F125` by ad-hoc release or NOTAM, WLM-L_APP owns the airspace `SFC` to `F125`, while WLM APP owns the rest of WLM TCU airspace above `F125`. This may be adjusted as required with coordination.

#### Diagram
<figure markdown>
![WLM TCU Airspace](img/wlmtcu.png){ width="700" }
  <figcaption>WLM TCU Airspace</figcaption>
</figure>

!!! note
    It is the responsibility of the WLM TCU controller(s) to negotiate any airspace releases with ARL(All).

### ADC
When WLM ADC is online, they own the airspace within the WLM MIL CTR A (`SFC`-`A050`). This may be amended/released as required between WLM ADC and WLM TCU.

<figure markdown>
![WLM ADC Airspace](img/wlmadc.png){ width="700" }
  <figcaption>WLM ADC Airspace</figcaption>
</figure>

## Charts
!!! note
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Coordination
### ARL(All)

#### Airspace
Any airspace releases from the default setup must be coordinated and agreed upon with ARL. It is also good practice to remind them of any airspace releases that may be active due to NOTAMs.

#### Departures
Voiceless coordination is in place from WLM TCU to ARL(All) for aircraft assigned the lower of `F120` or the `RFL`, and tracking via a Procedural SID terminus.

Any aircraft not meeting the above criteria must be prior coordinated to ARL(All).

!!! example
    <span class="hotline">**WLM TCU** -> **MLD**</span>: "QJE1597, request DCT OMGAB"  
    <span class="hotline">**MLD** -> **WLM TCU**</span>: "QJE1597, concur DCT OMGAB"  

#### Arrivals/Overfliers
The Standard assignable level from ARL(All) to WLM TCU is `A090`, and assigned a STAR. All other aircraft must be prior coordinated.

### ADC
#### Airspace
WLM ADC owns the airspace within the WLM MIL CTR A (`SFC`-`A050`). This may be amended/released as required between WLM ADC and WLM TCU.

#### Departures
'Next' coordination is **not** required from WLM ADC to WLM TCU for aircraft that are:  
a) Departing from a runway nominated in the ATIS; and  
b) Assigned the standard assignable level;  
c) Assigned a **Procedural** SID  

!!! example
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "Next, MVP"  
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "MVP, Left Heading 010, Unrestricted"  
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "Left Heading 010, MVP"  

The Standard Assignable level from WLM ADC to WLM TCU is the lower of `F120` or the `RFL`.

#### Arrivals/Overfliers
Voiceless coordination is in place from WLM TCU to WLM ADC for arrivals cleared for an approach on to a runway nominated on the ATIS. All other aircraft and all overfliers must be heads-up coordinated as soon as practical.

!!! example
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "via WLM, ZULU, Close formation of 5, do you have any restrictions or requirements?”  
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "ZULU, no restrictions or requirements, A040"  