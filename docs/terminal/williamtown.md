---
  title: Williamtown TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Williamtown Approach (High)**    | **Willy Approach**   | **133.300**         | **WLM_APP**                                   |
| <span class="indented">Williamtown Approach (Low) :material-information-outline:{ title="Non-standard position"}    | Willy Approach   | 135.700         | WLM-L_APP                                   |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
By default, WLM TCU owns the airspace from `SFC` to `F125`. In exceptional circumstances, such as specific military exercises or events, an additional TCU controller may log on, splitting the TCU vertically. In these situations, the controller should negotiate an upper limit with ARL(All) which works for both parties.

When WLM TCU is active above `F125` by ad-hoc release, **WLM-L_APP** owns the airspace from `SFC` to `F125`, while **WLM_APP** owns the rest of WLM TMA above `F125`.

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
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Flow
### Local Knowledge
- Aircraft may be assigned the Romeo or Victor STAR to reduce track miles
- During VMC by day, aircraft may be instructed to track for a visual base to either runway

### Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | STAR         | RWY 12 | RWY 30 |
    | ------------ | :----: | :----: |
    | **ASUVA**    | 15     | 7^     |
    | **EKIPU**    | 12^    | 11^    |
    | **IVTAG R/V**<br>*EKIPU transition*<br>*OVLUX transition*<br>*PUDUT transition*    | <br>-<br>-<br>-     | <br>8\^<br>8\^<br>9^     |
    | **LAXUM A**  | 9^     | 15     |
    | **LAXUM B**  | 11^    | 18     |
    | **LAXUM R**  | 8^     | 11^    |
    | **LAXUM V**  | 8^     | 11^    |
    | **OVLUX**    | 11^    | 11^    |
    | **PUDUT**    | 9^     | 12^    |

=== "Non-Jets"
    | STAR         | RWY 12 | RWY 30 |
    | ------------ | :----: | :----: |
    | **ASUVA**    | 17     | 8^     |
    | **EKIPU**    | 13^    | 12^    |
    | **IVTAG R/V**<br>*EKIPU transition*<br>*OVLUX transition*<br>*PUDUT transition*    | <br>-<br>-<br>-     | <br>9\^<br>9\^<br>10^     |
    | **LAXUM A**  | 10^    | 17     |
    | **LAXUM B**  | 12^    | 21     |
    | **LAXUM R**  | 9^     | 12^    |
    | **LAXUM V**  | 9^     | 13^    |
    | **OVLUX**    | 13^    | 13^    |
    | **PUDUT**    | 10^    | 13^    |

#### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

#### Assumptions
- Nil wind
- The feeder fix for all STARs is the assigned STAR transition waypoint (if applicable), otherwise the waypoint coinciding with the STAR title

### Calculator
<script type="module" src="../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YWLM"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YWLM"></div>

## Coordination
### ARL(All)

#### Airspace
Any airspace releases from the default setup must be coordinated and agreed upon with ARL. It is also good practice to remind them of any airspace releases that may be active due to NOTAMs.

#### Departures
Voiceless for all aircraft:

- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F120` or the `RFL`

!!! note
    Aircraft are *not required* to be tracking via the **SID procedure**, simply tracking via any of the terminus waypoints (Regardless of *departure airport* or *assigned SID*) is sufficient to meet the criteria for **voiceless coordination**

All other aircraft going to ARL CTA must be **Heads-up** Coordinated by WLM TCU prior to the boundary.

!!! phraseology
    <span class="hotline">**WLM TCU** -> **MLD**</span>: "QJE1597, request DCT OMGAB"  
    <span class="hotline">**MLD** -> **WLM TCU**</span>: "QJE1597, concur DCT OMGAB"  

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YWLM**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from ARL CTA will be **Heads-up** Coordinated to WLM TCU.

### ADC
#### Airspace
WLM ADC owns the airspace within the WLM MIL CTR A (`SFC`-`A050`). This may be amended/released as required between WLM ADC and WLM TCU.

#### Departures
[Next](../controller-skills/coordination.md#next) coordination is **not** required from WLM ADC to WLM TCU for aircraft that are:  

- Departing from a runway nominated in the ATIS; and  
- Assigned the standard assignable level; and 
- Assigned a **Procedural** SID

The Standard Assignable level from WLM ADC to WLM TCU is:

| Aircraft | Level |
| ------- | ----- |
| All | The lower of `F120` and `RFL` |

#### Arrivals/Overfliers
Voiceless coordination is in place from WLM TCU to WLM ADC for arrivals cleared for an approach on to a runway nominated on the ATIS. All other aircraft and all overfliers must be heads-up coordinated as soon as practical.

!!! phraseology
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "via WLM, ZULU, Close formation of 5, do you have any restrictions or requirements?”  
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "ZULU, no restrictions or requirements, A040"  