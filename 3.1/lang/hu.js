﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: hu.js
 * 	Hungarian language file.
 * 
 * File Author:
 * 		smici (smici@mail.datanet.hu)
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Általános",
 Downloads			: "Letöltések",
 Connection			: "Kapcsolat",
 BitTorrent			: "BitTorrent",
 Queueing			: "Sorbaállítás",
 Scheduler			: "Ütemező",
 Advanced			: "Egyéb",
 Disk_Cache			: "Lemez Cache",
 Enable_Web_Interface : "Web UI engedélyezése",
 Authent			: "Hitelesítés",
 Username			: "Felh.név",
 Password			: "Jelszó",
 Enable_Guest_acc	: "Vendég hozzáférés engedése",
 Connectivity		: "Kapcsolat",
 Alt_list_port		: "Alternatív port használata (az alapértelmezett port)",
 Rest_access		: "Korlátozott hozzáférésű IP címek (vesszővel elválasztva)",
 User_Interface		: "Felhasználói felület",
 Confirm_del_torr	: "Torrent törlésének jóváhagyatása",
 Update_GUI_every	: "GUI frissítési ideje",
 ms					: "ms",
 Alt_list_bckgnd	: "Eltérő háttér színű lista",
 Show_speed			: "Sebesség mutatása",
 Don_t				: "Nem",
 In_status_bar		: "állapotsorban",
 In_title_bar		: "Címsorban",
 Show_cat_start		: "Kategóriák mutatása indításkor",
 Show_det_start		: "Tulajdonságok mutatása indításkor",
 Restor_def			: "Alaphelyzet visszaállítása",
 When_add_torrent	: "Torrent hozzáadásakor",
 Dnt_start_down_auto: "Ne induljon el automatikusan",
 Other_sett			: "További beállítások",
 Append_ut_incompl	: "félkészek kiegészítése .!ut-el",
 Prealloc_all_files	: "Tárhely előre lefoglalása",
 Prev_stnd_w_act_con: "Készenléti-mód kikapcsolása, ha van aktív torrent",
 Listening_Port		: "Bejövő port",
 Port_f_incom_conns	: "Port a bejövő kapcsolatokhoz",
 Random_Port		: "Véletlen port",
 Rnd_port_torr_start: "Véletlen port µTorrent minden indításakor",
 En_UPnP_mapp		: "UPnP port kezelés engedése",
 Add_torr_mustdie_f	: "µTorrent hozzáadása a tűzfalhoz (csak XP SP2 vagy újabb)",
 Proxy_Server		: "Proxy Szerver",
 Type				: "Típus",
 none				: "(nincs)",
 Proxy				: "Proxy",
 Port				: "Port",
 Use_proxy_4_p2p_con: "proxy szerver használqata peer-to-peer kapcsolatoknál",
 Bandwidth_Limiting : "Sávszélesség korlátozás",
 Global_max_upl		: "Maximum feltöltési seb",
 unlimited			: "korlátlan",
 Alt_down_r_downl	: "Alternatív feltöltési seb., ha nincs letöltés",
 Glob_max_downl		: "Maximum letöltési sebesség",
 Num_of_conn		: "Kapcsolatok száma",
 Glob_max_conn		: "Kapcsolatok együttes maximális száma",
 Max_conn_peer_torr	: "Peer kapcsolódások maximális száma torrentenként",
 Num_upl_slots		: "Feltöltési szál torrentenként",
 Extra_ulslots		: "Új feltöltési szál indítása, ha a feltöltési seb. < 90%",
 Add_bittor_featrs	: "További BitTorrent tulajdonságok",
 En_DHT_ntw			: "DHT hálózat engedése",
 Ask_scrape			: "Scrape info. lekérése a trackertől ",
 En_DHT_new_torrs	: "DHT engedése új torrentnél",
 Peer_exch			: "Peer kicserélés engedése",
 Ip_report_track	: "Tracker-nek küldött IP/gépnév",
 Protocol_enc		: "Protokoll titkosítás",
 Outgoing			: "Kimenő",
 Disabled			: "Tiltva",
 Enabled			: "Engedve",
 Forced				: "Erőltetve",
 All_inc_legacy_conn: "Öröklött bejövő kapcsolatok engedése",
 Queue_sett			: "Sor beállítás",
 Max_n_act_torrs	: "Aktív torrentek maximális száma (fel- vagy letöltés)",
 Max_num_act_downl	: "Aktív letöltések maximális száma",
 Seed_while			: "Feltöltés amíg [alap érték]",
 Ratio_is			: "Arány",
 or_time_is			: " % vagy a seed ideje",
 Ignore				: "(Mellőz)",
 nin_min			: "90 perc",
 two_h				: "2 óra",
 three_h			: "3 óra",
 four_h				: "4 óra",
 five_h				: "5 óra",
 six_h				: "6 óra",
 seven_h			: "7 óra",
 eight_h			: "8 óra",
 nine_h				: "9 óra",
 ten_h				: "10 óra",
 twelve_h			: "12 óra",
 sixteen_h			: "16 óra",
 twenty_h			: "20 óra",
 tw_four_h			: "24 óra",
 thirty_h			: "30 óra",
 thirty_six_h		: "36 óra",
 forty_eight_h		: "48 óra",
 sixty_h			: "60 óra",
 sev_two_h			: "72 óra",
 nin_six_h			: "96 óra",
 Seed_prior			: "Feltöltéshez magasabb prioritás a letöltéssel szemben",
 When_torr_reach	: "Amikor a torrent eléri a feltöltési célt",
 Limit_upl_rate		: "Feltöltési korlát [0 megáll]",
 En_shedul			: "Ütemező bekapcsolása",
 Shed_sett			: "Ütemező beállítások",
 Lim_upl_rate		: "Feltöltési korlát",
 Lim_dow_rate		: "Letöltési korlát",
 Dis_DHT_when_t_off	: "DHT tiltása kikapcsoláskor",
 Disc_cahe			: "Lemez cache",
 Disc_cahe_bla_bla	: "A lemez cache segítségével a gyakran szükséges adatok a memóriába kerülnek, csökkentve a lemezre írás olvasás számát. A µTorrent normál esetben automatikusan kezeli, de manuálisan is lehet állítani a paramétereket.",
 Overwr_d_cahe_au	: "Automatikus cache méret felülbírálása és kézi megadása:",
 MB					: "MB",
 Red_mem_usage		: "Memória használat csökkentése, ha nem kell cache",
 Adv_cache_sett		: "Haladó cache beállítások",
 En_cach_disc		: "Lemez írás cache engedése",
 Wr_out_ever_2_min	: "Változatlan blokk kiírása 2 percenként",
 Wr_immed			: "Befejezett szeletek kiírása azonnal",
 En_cah_disc_read	: "Lemezről olvasási cache engedése",
 Turn_off_w_read	: "Olvasási cache kikapcsolása, ha a feltöltés lassú",
 Rem_old_from_cahe	: "Régi blokk eltávolítása a cache-ből",
 Increase_autom_cach: "Automatikus cache méret megnövelése cache thrashing-nél",
 Advanced			: "Haladó",
 Advanced_label		: "Haladó beállítások [FIGYELEM: Ne módosítsd!]",
 Cancel				: "Mégse",
 uTorrent_settings	: "µTorrent beállítások",
 
// Main window
 Doesnt_support		: "A ruTorrent nem támogatja az ön böngészőjét.",
 Name				: "Név",
 Status				: "állapot",
 Size				: "Méret",
 Done				: "Kész",
 Downloaded			: "Letöltve",
 Uploaded			: "Feltöltve",
 Ratio				: "Arány",
 DL					: "DL",
 UL					: "UL",
 ETA				: "Hátralévő idő",
 Label				: "Cimke",
 Peers				: "Peer",
 Seeds				: "Seed",
 Avail				: "Elérhetőség",
 Remaining			: "Hátralévő",
 Priority			: "Prioritás",
 Download			: "Letöltés",
 Upload				: "Feltöltés",
 Not_torrent_file	: "A file-nak torrent file-nak kell lennie.",
 Pausing			: "Felfüggesztve",
 Seeding			: "Feltölt",
 Downloading		: "Letölt",
 Checking			: "Ellenőrzés alatt",
 Error				: "Hiba!",
 Queued				: "Várakozik",
 Finished			: "Befejezve",
 Stopped			: "Megállítva",
 Request_timed_out	: "A rTorrent idő túllépés.",
 
 Force_Start		: "Kényszerített indítás",
 Start				: "Indítás",
 Pause				: "Felfüggesztés",
 Stop				: "Megállítás",
 Force_recheck		: "Kényszerített újraellenőrzés",
 New_label			: "Új cimke...",
 Remove_label		: "Cimke törlése",
 Labels				: "Cimkék",
 Remove				: "Eltávolítás",
 Delete_data		: "Adat törlése",
 Remove_and			: "Eltávolítás és",
 Details			: "Részletek...",
 Properties			: "Tulajdonságok...",
 of					: " / ",		//this two creates line 
 connected			: "csatlakoztatott",	//  XX of YY connected
 High_priority		: "Magas",
 Normal_priority	: "Normál",
 Low_priority		: "Alacsony",
 Dont_download		: "Kihagy",
 Shure_restore_UI	: "Biztos, hogy vissza akarod állítani a GUI-t?",
 Reloading			: "Újra töltés...",
 Name				: "Név",
 Date_				: "Dátum",
 Files				: "File",
 Logger				: "Napló",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Betöltés...",
 Torrent_file		: "Torrent file",
 Torrent_URL		: "Torrent URL",
 Cookies			: "Cookies",
 RSS_Downloader		: "RSS Letöltő",
 Torrent_properties	: "Torrent tulajdonságok",
 Trackers			: "Trackerek",
 Max_down_rate		: "Max. letöltési sebesség",
 Max_upl_rate		: "Max. feltöltési sebesség",
 Bandwidth_sett		: "Sávszélesség beállítás",
 Number_ul_slots	: "Feltöltési szálak száma",
 Override_default	: "Alapbeállítások felülbírálása",
 Initial_seed		: "Kezdő feltöltés",
 Enable_DHT			: "DHT engedése",
 Peer_ex			: "Peer csere",
 About				: "Névjegy",
 Enter_label_prom	: "Új cimke a kijelölt torrenthez",
 Remove_torrents	: "Torrent eltávolítása",
 Rem_torrents_prompt: "Valóban el akarod távolítani a kijelölt torrente(ke)t?",
 All				: "Összes",
 Active				: "Aktív",
 Inactive			: "Inaktív",
 No_label			: "Nincs cimke",
 Transfer			: "átvitel",
 Time_el			: "Eltelt idő",
 Remaining			: "Hátralévő idő",
 Share_ratio		: "Arány",
 Down_speed			: "Letöltési sebesség",
 Down_limit			: "Le korlát",
 Ul_speed			: "Feltöltési sebesség",
 Ul_limit			: "Fel korlát",
 Wasted				: "Kárbaveszett",
 Tracker			: "Tracker",
 Track_URL			: "Tracker URL",
 Track_status		: "Tracker állapot",
 Update_in			: "Frissítésig",
 DHT_status			: "DHT állapot",
 Save_as			: "Mentés helye",
 Tot_size			: "Teljes méret",
 Created_on			: "Létrehozva",
 Comment			: "Megjegyzés",
 
 
 //buttons
 add_button			: "File hozzáadása",
 add_url			: "URL hozzáadása",
 ok				: "   OK   ",
 Cancel				: " Mégse ",
 no				: "   Nem   ",
 
 mnu_add			: "Torrent hozzáadása",
 mnu_remove			: "Eltávolítás",
 mnu_start			: "Indítás",
 mnu_pause			: "Felfüggesztés",
 mnu_stop			: "Megállítás",
 mnu_rss			: "RSS letöltő",
 mnu_settings			: "Beállítások",
 mnu_search			: "Keresés",
 mnu_lang			: "Nyelv",
 
 //Other variables added by spide
 torrent_add			: "Torrent hozzáadása", /*Caption of torrent add box*/
 time_w				: "hét ", /*for x weeks*/
 time_d				: "nap ", /*for x days remaining*/
 time_h				: "óra ", /*for x hours remaining*/
 time_m				: "perc ", /*for x minutes remaining*/
 time_s				: "mp ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your Web-server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to path", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web-server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web-server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work.",
 addTorrentSuccess		: "torrent was successfully passed to rTorrent.",
 addTorrentFailed		: "Error: torrent wasn't passed to rTorrent.",
 pnlState			: "State",
 newLabel			: "New Label",
 enterLabel			: "Enter Label",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Korlát",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts",
 fullTableRender		: "Full render of large tables",
 showScrollTables		: "Show table contents while scrolling",
 idNotFound			: "rTorrent's user can't access 'id' program. Some functionality will be unavailable.",
 gzipNotFound			: "Web-server can't access 'gzip' program. ruTorrent will not work.",
 cantObtainUser			: "ruTorrent can't detect the uid or rtorrent user. Some functionality will be unavailable.",
 retryOnErrorTitle		: "If rtorrent is not available try again after",
 retryOnErrorList		: { 0: "Don't try again", 30: "30 sec", 60: "1 min", 120: "2 min", 300: "5 min", 900: "15 min" }
 };
