---
title: vatSys Setup
---

--8<-- "includes/abbreviations.md"

<details open markdown="1">
<summary>Setup</summary>

Although much of the detailed setup is up to personal preference, the following settings are **strongly** recommended to help best execute the appropriate role.

</details>

<details markdown="1">
<summary>Enroute</summary>

## Enroute
### Display
ATC List: **ON**
### Strip Setup
Sort: **TIME**  
Strips: **STATE**
### Windows displayed
**JURISDICTION**  
**PREACTIVE**  
**ANNOUNCED**  
**HANDOVER-IN**  
**ARRIVAL LIST** (if airport is busy, eg during events)  
**All ATISes** in your airspace  
### Maps
**Dynamic Infill**  
**ALL_CTA**  
**ALL_POINTS_HIGH**  
**ALL_ROUTES_HIGH**  
**ALL_SECTORS**  
**COAST_ALL**  
**ENR_LL_LABELS**  
**UPPER_SECTOR_FREQS**  
### Tools
Velocity Vector: **2 MINS**  
Short Route Probe: **OFF** (Toggled on for non-identified tracks)  
History Trails: **9**  
FPASD: **ON**  
Extended Labels: **ON**  
### Info
**AREA QNH**  
**TFMS** (if airport is busy, eg during events)  
**AIS DISPLAY** for major airports in your airspace

</details>

<details markdown="1">
<summary>TCU</summary>

## TCU
### Display
ATC List: **ON**
### Strip Setup
Sort: **TIME**  or **ALPHA** as preferred  
Strips: **BEACON**
### Windows displayed
**ADEP (Towered airports in airspace)**  
**Other**  
**ARRIVAL LIST**  
**All ATISes** in your airspace  
### Maps
**Dynamic Infill**  
**ALL_CTA**  
**ALL_SECTORS**  
**TMA_LL_LABELS**  
**UPPER_SECTOR_FREQS**  
#### Local
**XX_COAST**  
**XX_(RWY CONFIG)**  
**XX_RTCC**  
**XX_TCU**  
### Tools
Velocity Vector: **1 MIN**  
Short Route Probe: **OFF**  
History Trails: **5**  
FPASD: **ON**  
Extended Labels: **OFF** (Toggled on for aircraft not arriving at main airport)  
### Info
**TFMS** (if airport is busy, eg during events)  
**AIS DISPLAY** for major airports in your airspace

</details>

<details markdown="1">
<summary>Tower</summary>

## Tower
### Display
ATC List: **ON**
### Strip Setup
Sort: **TIME**  
Strips: **BEACON**
### Windows displayed
**ADEP (Airport)**  
**Other**  
**ARRIVAL LIST** (if airport is busy, eg during events)  
**ATIS**
### Maps
**Dynamic Infill**  
**ALL_CTA**  
**TMA_LL_LABELS** (if situated inside TCU, and if you own CTA steps)  
**ENR_LL_LABELS** (if not situated inside TCU)  
#### Local
**XX_COAST**  
**XX_(RWY CONFIG)** (if applicable)  
**XX_(RWY CONFIG)_NAMES** (if applicable)  
**XX_TCU**  
**XX_TCU_NAMES**  
### Tools
Velocity Vector: **1 MIN**  
Short Route Probe: **OFF** (Toggled on for non-identified tracks)  
History Trails: **5**  
FPASD: **ON**  
Extended Labels: **OFF** (Toggled on for aircraft not arriving at main airport)  
### Info
**AIS DISPLAY**

</details>