---
  title: Williamtown (YWLM)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                 | Callsign              | Frequency   | Login ID      |
| -------------------- | --------------------- | ----------- | ------------- |
| **Williamtown ADC**  | **Willy Tower**       | **118.300** | **WLM_TWR**   |
| **Williamtown SMC**  | **Willy Ground**      | **121.800** | **WLM_GND**   |
| **Williamtown ACD**  | **Willy Delivery**    | **130.350** | **WLM_DEL**   |
| **Williamtown ATIS** |                       | **134.450** | **YWLM_ATIS** |

## Airspace
WLM ADC owns the airspace within the WLM MIL CTR A (`SFC`-`A050`). This may be amended/released as required between WLM ADC and WLM TCU.

<figure markdown>
![WLM ADC Airspace](img/wlmadc.png){ width="700" }
  <figcaption>WLM ADC Airspace</figcaption>
</figure>

## SID Selection
Aircraft planned via **KEXAR**, **LIMLO**, **MONDO**, and **UBNON^** shall be assigned the **Procedural SID** that terminates at the appropriate SID terminus. Jet Aircraft **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

Aircraft unable to accept a procedural SID, and **non-RNAV** aircraft shall be assigned either the RADAR SID or a visual departure.

!!! note 
    ^ When the R596 area is active, aircraft planned via **UBNON** and departing Runway 12 shall be assigned the **UBNON BRAVO** SID.

## Coordination
### Auto Release
[Next](../../controller-skills/coordination.md#next) coordination is **not** required from WLM ADC to WLM TCU for aircraft that are:  

- Departing from a runway nominated in the ATIS; and  
- Assigned the standard assignable level; and 
- Assigned a **Procedural** SID

The Standard Assignable level from WLM ADC to WLM TCU is:

| Aircraft | Level |
| ------- | ----- |
| All | The lower of `F120` and `RFL` |

#### Departures Controller
Where a single TCU controller is operating the WLM TMA, the departures controller shall be **WLM_APP** (frequency 133.300).

Where the non-standard **WLM-L_APP** sector is online, they shall be the departures controller (frequency 135.700).

### Arrivals/Overfliers
Voiceless coordination is in place from WLM TCU to WLM ADC for arrivals cleared for an approach on to a runway nominated on the ATIS. All other aircraft and all overfliers must be heads-up coordinated as soon as practical.

!!! phraseology
    <span class="hotline">**WAL** -> **WLM ADC**</span>: "via WLM, ZULU, Close formation of 5, do you have any restrictions or requirements?”  
    <span class="hotline">**WLM ADC** -> **WAL**</span>: "ZULU, no restrictions or requirements, `A040`"  
## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}