---
  title: Tahiti Positions
---

--8<-- "includes/abbreviations.md"

# Tahiti Positions

## Tahiti

In the real-world, NTTT is operatated by the French, so there are some peculiarities in NTTT.

* Oceanic airspace (Class A) starts at FL195, instead of FL245 in NZZO.
* Outside of the Tower/Approach/Enroute CTAs, the NTTT FIR is Class E from FL045 to FL195. This means that - 
    * If you're flying IFR above FL045, you're required to grab an IFR clearance and separation from NTTT_FSS.
    * If you're flying VFR above FL045, you're entitled to a traffic information service.
    * If you're above FL045 within NTTT_CTR's 200nm arc, this service is provided by NTTT_CTR.
* Outside of the Tower/Approach/Enroute CTAs, and between SFC and FL045, you're flying in Class G.

### FSS

* **NTTT_FSS**: "Tahiti Control" on 9.116 (aliased as 125.500)
    * Other RW frequencies: 3.467, 5.643, 8.867, 13.261, 17.904 (SELCAL), 5680 (no SELCAL).
    * Provides an Oceanic FSS service above FL195.
    * Provides a Class E IFR and Traffic service to aircraft above FL045, outside of any other CTA airspace such as Tower/Approach/Enroute.

### Enroute

* **NTTT_CTR**: "Tahiti Control" on 134.700
    * Provides a radar service within the Iles Sous Le Vent sector from 1500ft to FL195.
    * Provices a procedural service **outside** of the Iles Sous Le Vent sector, up to 200nm DME TAF, from FL045 to F195. 
      * This 200nm diameter circle is Class E, where an IFR service is provided, and only a VFR traffic information service is provided.
    * Provides an Enroute/Approach Control service for flights between NTTB (Bora Bora), NTTR (Raiatea), Huahine (NTTH) and Tupai (NTUU). 
        * NTTB and NTTR have their own Towers, operating from SFC to 1,500ft.  
            * NTTB_TWR also covers NTUU to the north.
      * NTTH is uncontrolled, with the base of NTTT_CTR at 1,500ft.

<figure markdown> 
  ![Tahiti Airspace](assets/nttt-ctr.png){ width="550" }
  <figcaption>
  </figcaption>
</figure>

The outer-most ring is the 200nm ring. Inside of this, the Class E service is provided by NTTT_CTR - outside it is provided by NTTT_FSS.

### TMA

* **NTAA_APP**: "Tahiti Approach" on 121.300
    * A 50nm radius circle centered on NTAA, with a wedge missing from the SE due to the big ass mountain.
    * Provides a service from 2,500ft to FL195.

### Towers

* **NTAA_TWR**: "Tahiti Tower" on 118.100
    * **Limits:** SFC to 2,500ft. Essentially a 20nm circle centered on TAF VOR, with two wedges cut out over mainland Tahiti and the island of Moorea.
    * NTAA provides a ground service on 121.900.
    * Moorea Tower (NTTM) is 10nm North West of NTAA, with a small control zone from SFC to 1,500ft. This zone sits inside of NTAA_TWR's airspace, and the Tower function is provided by NTAA when NTTM is off watch.
* **NTTM_TWR**: "Moorea Tower" on 118.700
    * **Limits**: SFC to 1,500ft. Basically a square that sits over the North side of Moorea. Eastern lateral bound is roughly 5nm east of Moorea, and 10 miles to the North and West.
    * The NTTM control zone sits entirely within NTAA_TWR's zone. When NTTM_TWR is off watch, the Tower function is provided by NTAA_TWR. 
        * The Approach service is still provided by NTAA_APP from 1,500ft. NTAA_APP **does not** perform top-down services to NTTM_TWR.
    * Care needs to be taken surrounding the assignment of SIDs/STARs at Moorea, as the extended centerline for RWY 12/30  interfaces with RWY 04/22 at NTAA. **Traffic at NTAA has priority**.
* **NTTB_TWR**: "Bora Bora Tower" on 118.900
    * **Limits**: SFC to 1,500ft. Bora Bora Tower's CTR is essentially a 15nm by 10nm box centered on BB NDB, with the long axis running NW to SE. There is a small wedge to the south of the AD, with the LL raised to 500ft. 
    * The Tower CTR sits within NTTT_CTR, and can expect the Approach and Enroute service to be provided by NTTT_CTR. 
    * **TODO**: Investigate behaviour between NTTB and NTUU, as NTUU sits within NTTB's CTR.
* **NTTR_TWR**: "Raiatea Tower" on 118.500
    * **Limits**:  SFC to 1,500ft. The Raiatea CTR is a weird bow-tie looking CTR, interfacing with Bora Bora's CTR to the NW, and extending out to the East by about 10nm. The top and bottom wedges are due to Fareura/Puurauti to the North, and Tefatoaiti to the South.

### AFIS

!!! warning "About Flight Information Services"
    Flight Information Services provide a traffic advisory and weather information service. They also relay IFR clearances to aircraft on behalf of their senior sector. 

    These stations **are not** a priority, and are simply "nice to have" positions that would be cool to feature in an event.


* **NTAR_FIS**: "Rurutu Information" on 118.300
* **NTAT_FIS**: "Tubuai Information" on 118.300
* **NTAV_FIS**: "Raivavae Information" on 118.500
* **NTGC_FIS**: "Tikehau Information" on 119.500
* **NTGF_FIS**: "Fakarava Information" on 119.900
* **NTGI_FIS**: "Manihi Information" on 124.300
* **NTGJ_FIS**: "Totegegie Information" on 118.300
* **NTGM_FIS**: "Makemo Information" on 121.400
* **NTGT_FIS**: "Takapoto Information" on 118.500
* **NTMD_FIS**: "Nukuhiva Information" on 118.300
* **NTMN_FIS**: "Hiva Oa Information" on 119.700
* **NTTG_FIS**: "Rangiroa Information" on 118.300
* **NTTH_FIS**: "Huahine Information" on 119.300
* **NTTO_FIS**: "Hao Information" on 119.100
* **NTTP_FIS**: "Maupiti Information" on 118.300
* **NTTR_FIS**: "Raiatea Information" on 118.500


