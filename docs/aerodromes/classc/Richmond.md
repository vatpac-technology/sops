---
  title: Richmond (YSRI)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Richmond ADC**    | **Richmond Tower**  | **135.500**         | **RI_TWR**        |
| **Richmond SMC**    | **Richmond Ground**  | **128.250**      | **RI_GND**        |
| **Richmond ATIS**    |   | **123.300**         | **YSRI_ATIS**       |

## Airspace
RI ADC being online will activate the **R470** Restricted Area, which is reclassified as **Class C** when active.

Control authority of the **R470** Restricted Area when active is as follows:

- RI ADC `SFC`-`A015`
- SY TCU (SDN) `A015`-`A045`

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Aerodrome
### SID Selection
vatSys does not have SIDs built-in for YSRI. Aircraft planned via **ANKUB**, **KADOM** or **MUDGI** may be assigned the SID that terminates at the appropriate waypoint, as long as ATC is familiar with the chart, and the pilot is able.

Aircraft who are not planned via these points, or who are negative RNAV, may be assigned a visual departure.

## VFR Procedures
All VFR aircraft outbound and inbound, or transiting the field maintain `A015`.  
Aircraft transiting the RIC CTR track via the northbound or southbound VFR route.  
Aircraft transiting northbound contact RI ADC at NPBR for clearance.  
Aircraft transiting southbound contact RI ADC at KRMD for clearance.  

!!! tip
    You can find details of the transit route (including reporting points and altitudes) in the [ERSA FAC YSRI and VTC](https://www.airservicesaustralia.com/aip/aip.asp){target=new}.

### Training Areas
There are three training areas located within **R470**, used for civil and military operations.

| **Name**                 | **Identifier** | **Vertical Limits** | **Notes**                        |
|-------------------------|---------------|---------------------|-----------------------------------|
| Londonderry Training Area | LDD TA        | `SFC - A015`        | Contained within R470             |
| Northern Training Area | NTA TA        | `SFC - A060`        | Contained within R470             |
| Southern Training Area | STA TA        | `SFC - A040`        | Contained within R470             |

Refer to [YSRI FIHA AD2 SUPP](https://ais-af.airforce.gov.au/australian-aip){target=new} for charts and more info.

## Miscellaneous
### Circuit Operations
YSRI circuit area is defined as within 6nm of the YSRI ARP. An aircraft operating in the circuit will be issued a clearance to the operate within the circuit area not above `A015`.

### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 10     | Left  |
| 28     | Left |

### Start Approval
A start approval is required whenever parachute drops are conducted onto the Richmond Drop Zone. Additionally, ‘propellers/engines stopped’ reports are required. ATC shall notify these requirements by ATIS broadcast.

### Inital and Pitch
The standard inital points are 5nm downwind of the active runway, dead side, left pitch/circuit.

## Coordination
### SY TCU
'Next' coordination is required from RI ADC to SY TCU for all aircraft.

!!! example
    <span class="hotline">**RI ADC** -> **SDN**</span>: "Next, TROJ57, runway 28"  
    <span class="hotline">**SDN** -> **RI ADC**</span>: "TROJ57, unrestricted"  
    <span class="hotline">**RI ADC** -> **SDN**</span>: "TROJ57"  

The Standard Assignable Level from **RI ADC** to **SY TCU** is the lower of `A050` or the `RFL`.  