// Use these extensions:
// https://addons.mozilla.org/en-US/firefox/addon/ublock-origin
// https://addons.mozilla.org/en-US/firefox/addon/https-everywhere

// Run this occasionally to clear out Firefox's built-in add-ons:
// rm /usr/lib/firefox/browser/features/*

// Sources:
// about:config
// http://kb.mozillazine.org/About:config_entries
// http://kb.mozillazine.org/User.js_file
// https://github.com/pyllyukko/user.js
// https://github.com/ghacksuserjs/ghacks-user.js
// https://dxr.mozilla.org
// https://dxr.mozilla.org/mozilla-central/source/modules/libpref/init/all.js
// https://dxr.mozilla.org/mozilla-central/source/browser/app/profile/firefox.js
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
// https://github.com/amq/firefox-debloat
// https://firefox-source-docs.mozilla.org
// https://dxr.mozilla.org/mozilla-release/source/browser/extensions
// https://browserleaks.com
// https://developer.mozilla.org/en-US/Firefox
// https://developer.mozilla.org/en-US/Firefox/Experimental_features
// https://developer.mozilla.org/en-US/Firefox/Enterprise_deployment
// https://bugzilla.mozilla.org
// https://blog.mozilla.org/security

// Disable IPv6
user_pref("network.dns.disableIPv6", true);
user_pref("network.http.fast-fallback-to-IPv4", true);

// Disable slowStartup stuff
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);

// Disable this just cause it's debug
user_pref("browser.uiCustomization.debug", false);

// Disable passive key listeners
user_pref("apz.keyboard.passive-listeners", false);

// Disable async stack
user_pref("javascript.options.asyncstack", false);

// Don't know
user_pref("general.useragent.compatMode.firefox", false);

// Disable this just cause
user_pref("devtools.serviceWorkers.testing.enabled", false);
user_pref("dom.serviceWorkers.testUpdateOverOneDay", false);

// Disable laterrun
user_pref("browser.laterrun.enabled", false);

// Disable WOFF2
user_pref("gfx.downloadable_fonts.woff2.enabled", false);

// Disable CSS Grid
user_pref("layout.css.grid.enabled", false);

// Disable all logging
user_pref("app.update.log", false);
user_pref("apz.test.logging_enabled", false);
user_pref("browser.download.loglevel", "Off");
user_pref("browser.esedbreader.loglevel", "Off");
user_pref("browser.ping-centre.log", false);
user_pref("browser.search.log", false);
user_pref("browser.search.update.log", false);
user_pref("browser.uitour.loglevel", "Off");
user_pref("devtools.netmonitor.persistlog", false);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("devtools.webconsole.persistlog", false);
user_pref("dom.indexedDB.logging.enabled", false);
user_pref("dom.payments.loglevel", "Off");
user_pref("dom.performance.enable_user_timing_logging", false);
user_pref("dom.push.loglevel", "off");
user_pref("extensions.formautofill.loglevel", "Off");
user_pref("extensions.logging.enabled", false);
user_pref("gfx.logging.painted-pixel-count.enabled", false);
user_pref("gfx.logging.peak-texture-usage.enabled", false);
user_pref("gfx.logging.texture-usage.enabled", false);
user_pref("javascript.options.mem.log", false);
user_pref("layers.offmainthreadcomposition.log-animations", false);
user_pref("marionette.log.level", "off");
user_pref("media.cubeb.logging_level", "");
user_pref("media.webrtc.debug.log_file", "");
user_pref("media.webrtc.debug.multi_log", false);
user_pref("security.sandbox.logging.enabled", false);
user_pref("toolkit.asyncshutdown.log", false);
user_pref("toolkit.osfile.log", false);

user_pref("dom.popup_allowed_events", "");
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.compositionevent.allow_control_characters", false);
user_pref("dom.debug.propagate_gesture_events_through_content", false);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_showModalDialog", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("dom.require_user_interaction_for_beforeunload", true);
user_pref("dom.select_events.enabled", false);
user_pref("dom.select_events.textcontrols.enabled", false);
user_pref("dom.select_popup_in_parent.enabled", false);

user_pref("browser.search.official", true);
user_pref("browser.search.reset.enabled", true);
user_pref("browser.search.reset.whitelist", "");

// Disable enterprise roots feature
user_pref("security.enterprise_roots.enabled", false);

// Disable webextension themes
user_pref("extensions.webextensions.themes.enabled", false);
user_pref("extensions.webextensions.themes.icons.enabled", false);

// Disable frames, iframes
user_pref("dom.mozBrowserFramesEnabled", false);

// Disable, sounds weird
user_pref("application.use_ns_plugin_finder", false);

// Disable, sounds weird
user_pref("dom.manifest.onappinstalled", false);

// Default permissions
user_pref("permissions.default.camera", 0);
user_pref("permissions.default.desktop-notification", 0);
user_pref("permissions.default.geo", 0);
user_pref("permissions.default.image", 1);
user_pref("permissions.default.microphone", 0);
user_pref("permissions.default.shortcuts", 0);

// Disable this cause its weird
user_pref("signed.applets.codebase_principal_support", false);

// Make sure user is prompted for web extension permissions
user_pref("extensions.webextPermissionPrompts", true);
user_pref("extensions.webextOptionalPermissionPrompts", true);

// Don't autostart browser in private browsing mode
user_pref("browser.privatebrowsing.autostart", false);



//
// Customize
//

// UI customization
user_pref("browser.uiCustomization.state", "");

// Lightweight theme
user_pref("lightweightThemes.selectedThemeID", "");

// UI density
user_pref("browser.uidensity", 1);

// UI touch mode
user_pref("browser.touchmode.auto", false);

// Process counts
user_pref("dom.ipc.processCount", 8);
user_pref("dom.ipc.processCount.extension", 1); // breaks browser action if > 1
user_pref("dom.ipc.processCount.file", 8);
user_pref("dom.ipc.processCount.webLargeAllocation", 1); // shouldn't matter if large-allocation header is disabled

// Contextual identities
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 0);



//
// Scratch area
//

// Don't use system backend for notifications
user_pref("alerts.useSystemBackend", false);

// Not sure if should disable this or not; might make tabs more secure
user_pref("jsloader.shareGlobal", false);

// Disable rewriting of youtube embeds
user_pref("plugins.rewrite_youtube_embeds", false);

// Disable navigator.registerContentHandler
user_pref("dom.registerContentHandler.enabled", false);

// Disable storageMananger.prompt testing
user_pref("dom.storageManager.prompt.testing", false);
user_pref("dom.storageManager.prompt.testing.allow", false);

// Disable focusmanager testmode
user_pref("focusmanager.testmode", false);

// Disable plugins testmode
user_pref("plugins.testmode", false);

// Disable webextension tests
user_pref("webextensions.tests", false);

// Disable race cache with network
user_pref("network.http.rcwn.enabled", false);

// Disable WebVTT
user_pref("media.webvtt.pseudo.enabled", false);
user_pref("media.webvtt.regions.enabled", false);

// Disable quota manager
user_pref("dom.quotaManager.testing", false);

// Make sure extensions use compartments
user_pref("dom.compartment_per_addon", true);

// Feel like this should be set to true
user_pref("dom.ipc.cpows.forbid-cpows-in-compat-addons", true);
user_pref("dom.ipc.cpows.forbid-unsafe-from-browser", true);

// Don't allow extensions to be installed in weird ways
user_pref("extensions.enabledScopes", 1);
user_pref("extensions.autoDisableScopes", 15);

// Remove paths when sending URLs to PAC scripts
user_pref("network.proxy.autoconfig_url.include_path", false);

// Disable HTTP Alternative Services
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);

// Remove webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");

// Disable open with feature when downloading
user_pref("browser.download.forbid_open_with", true);

// Disable middle mouse clicking opening URLs from clipboard
user_pref("middlemouse.contentLoadURL", false);

// Disable SPDY / HTTP2
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.spdy.enabled.http2draft", false);

// Remove special permissions for Mozilla domains
user_pref("permissions.manager.defaultsUrl", "");

// Disable underline offset handling
user_pref("font.blacklist.underline_offset", "");

// Disable graphite rendering
user_pref("gfx.font_rendering.graphite.enabled", false);

// Display advanced info for insecure connections
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Display HTTP sites as insecure
user_pref("security.insecure_connection_icon.enabled", true);

// Disable disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk_cache_ssl", false);

// Disable randomized FF HTTP cache decay experiments
user_pref("browser.cache.frecency_experiment", -1);

// Disable Form Autofill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Prevent cross-origin images from displaying an HTTP auth prompt
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);

// Disable TLS1.3 0-RTT
user_pref("security.tls.enable_0rtt_data", false);

// Disable Windows taskbar features
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.enable", false);

// Disable Windows' family safety mode from MITMing HTTPS traffic
user_pref("security.family_safety.mode", 0);



//
// Cosmetic / Preferential
//

// Use multiprocess Firefox
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("browser.tabs.remote.autostart", true);
user_pref("browser.tabs.remote.autostart.2", true);
user_pref("browser.tabs.remote.desktopbehavior", true);
user_pref("browser.tabs.remote.force-enable", true);
user_pref("extensions.e10sBlocksEnabling", false);

// Disable warmup
user_pref("browser.tabs.remote.warmup.enabled", false);

// Make extensions run in a separate process
user_pref("extensions.webextensions.remote", true);

// Make file: URIs run in a separate process
user_pref("browser.tabs.remote.separateFileUriProcess", true);

// Block web content in file processes
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);

// Open all new windows as new tabs instead
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// Disable inline-autocomplete in URL bar
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);

// Disable one-click searches
user_pref("browser.urlbar.oneOffSearches", false);

// Don't suggest history
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.history.onlyTyped", false);
user_pref("browser.urlbar.maxHistoricalSearchSuggestions", 0);

// Don't suggest open tabs either
user_pref("browser.urlbar.suggest.openpage", false);

// Discard JavaScript source code once compiled
user_pref("javascript.options.discardSystemSource", true);

// Show popup blocker in action so user knows it is there
user_pref("browser.popups.showPopupBlocker", true);



//
// Storage
//

// Disable storage testing
user_pref("dom.storage.testing", false);

// Keep IndexedDB enabled for uBlock Origin
user_pref("dom.indexedDB.enabled", true);

// Disable experimental IndexedDB features
user_pref("dom.indexedDB.experimental", false);

// Clear on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// When Clearing browsing data - clear all
user_pref("privacy.sanitize.timeSpan", 0);

// Clear all this on shutdown
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.openWindows", false); // if set to true, Firefox bugs out on startup
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);

// When you manually clear everything, have everything checked
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.openWindows", true);
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", true);

// Disable history
user_pref("places.history.enabled", false);

// Disable device storage API
user_pref("device.storage.enabled", false);

// Disable StorageManager API
user_pref("browser.storageManager.enabled", false);
user_pref("dom.storageManager.enabled", false);

// Disable Satchel (Form Manager)
user_pref("browser.formfill.debug", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);

// Delete temp files on exit
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// Never store session data
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.resume_from_crash", false);

// Disable cookies for Mozilla Mail/News
user_pref("network.cookie.disableCookieForMailNews", true);

// Delete cookies at end of session
user_pref("network.cookie.enableForCurrentSessionOnly", true);

// Cookie behavior - 0 accept all - 1 block 3p - 2 no cookies
user_pref("network.cookie.cookieBehavior", 1);

// Make cookies last only the session
user_pref("network.cookie.lifetimePolicy", 2);

// Only allow third party cookies to all be treated as if they were session cookies
user_pref("network.cookie.thirdparty.sessionOnly", true);

// Same goes for non-secure
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// Disable HTTP sites setting cookies as 'secure'
user_pref("network.cookie.leave-secure-alone", true);

// Don't keep anything stored when an extension is uninstalled
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);

// Disable Web Workers
user_pref("dom.workers.enabled", false);

// Disable Service Workers
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.serviceWorkers.openWindow.enabled", false);

// Disable Cache Storage API
user_pref("dom.caches.enabled", false);

// Disable download history
user_pref("browser.download.manager.retention", 0);

// Set download dir default to Downloads
user_pref("browser.download.folderList", 2);

// Always ask user where to save download
user_pref("browser.download.useDownloadDir", false);

// Disable adding recent downloads to OS' recent documents list
user_pref("browser.download.manager.addToRecentDocs", false);

// Disable hiding mime types for plugins
user_pref("browser.download.hide_plugins_without_extensions", false);

// Show plugins in downloads
user_pref("browser.download.show_plugins_in_list", true);

// Disable favicons
user_pref("alerts.showFavicons", false);
user_pref("browser.chrome.favicons", false);
user_pref("browser.chrome.image_icons.max_size", 0);
user_pref("browser.chrome.site_icons", false);
user_pref("browser.shell.shortcutFavicons", false);

// Disable Application Cache
user_pref("browser.cache.offline.enable", false);
user_pref("offline-apps.allow_by_default", false);

// Do not screenshot tabs
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Disable bookmark backups
user_pref("browser.bookmarks.max_backups", 0);

// Disable password manager
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.storeWhenAutocompleteOff", false);

// Disable extensions from using sync storage
user_pref("webextensions.storage.sync.enabled", false);
user_pref("webextensions.storage.sync.serverURL", "");

// Don't remember site-specific zoom settings
user_pref("browser.zoom.siteSpecific", false);



//
// Fingerprinting
// See: https://bugzilla.mozilla.org/show_bug.cgi?id=1329996
//

// Fingerprint resistance
user_pref("privacy.resistFingerprinting", true);

// Disable mozAddonManager web API
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

// Reduce timing precision
user_pref("privacy.reduceTimerPrecision", true);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 20);

// Spoof 2 cores - implemented in Firefox 55
user_pref("dom.maxHardwareConcurrency", 2);

// Disable Speech Synthesis API - implemented in Firefox 56
user_pref("media.webspeech.synth.enabled", false);

// Spoof build ID
user_pref("general.buildID.override", "20100101");
user_pref("browser.startup.homepage_override.buildID", "20100101");

// Make sure JS always uses US-English locale - implemented in Firefox 59
user_pref("javascript.use_us_english_locale", true);

// Default Accept-Language header to this - implemented in Firefox 59
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.locale.matchOS", false);
user_pref("intl.regional_prefs.use_os_locales", false);
user_pref("intl.locale.requested", "en-US");
user_pref("general.useragent.locale", "en-US");

// Disable Geo API - implemented in Firefox 56
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.provider.use_gpsd", false);

// Effectively disable reader mode - implemented in Firefox 56
user_pref("reader.parse-on-load.enabled", false);
user_pref("reader.parse-on-load.force-enabled", false);

// Disable performance/timing related things
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_performance_observer", false);
user_pref("dom.enable_resource_timing", false); // implemented in Firefox 56
user_pref("dom.enable_user_timing", false); // implemented in Firefox 56
user_pref("dom.event.highrestimestamp.enabled", false);
user_pref("dom.performance.enable_user_timing_logging", false);
user_pref("dom.performance.time_to_non_blank_paint.enabled", false);
user_pref("media.video_stats.enabled", false); // implemented in Firefox 57
user_pref("media.track.enabled", false);

// Notify user of performance/timing things
user_pref("dom.performance.enable_notify_performance_timing", true);

// Disable device sensor API
user_pref("device.sensors.enabled", false); // implemented in Firefox 56

// Disable Gamepad API - implemented in Firefox 56
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.test.enabled", false);

// Don't update offline/online status, have it always be online
user_pref("network.manage-offline-status", false);
user_pref("network.online", true);

// Never send origin header
user_pref("network.http.sendOriginHeader", 0);

// Referer / referrer settings
user_pref("network.http.sendRefererHeader", 0);
user_pref("network.http.referer.userControlPolicy", 0);
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.referer.spoofSource", false);
user_pref("network.http.referer.hideOnionSource", true);

// Disable Network Information API
user_pref("dom.netinfo.enabled", false);

// Disable Network API - removed from FF
user_pref("dom.network.enabled", false);

// Disable DOM context menu events - breaks website
user_pref("dom.event.contextmenu.enabled", true); // true for now

// Disable DOM clipboard events - breaks websites
user_pref("dom.event.clipboardevents.enabled", false);

// Disable copy to clipboard from JS
user_pref("dom.allow_cut_copy", false);

// Disable Animation API
user_pref("dom.animations-api.core.enabled", false);
user_pref("dom.animations-api.element-animate.enabled", false);

// Disable pointer / touch events
user_pref("dom.w3c_pointer_events.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);

// Disable "Are you sure you want to leave?" confirmations
user_pref("dom.disable_beforeunload", true);

// Disable use of OS system colors
user_pref("browser.display.use_system_colors", false);
user_pref("ui.use_standins_for_native_colors", true);



//
// Security / Privacy
//

// Disable domain guessing
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.hide_user_pass", true);
user_pref("browser.fixup.dns_first_for_single_words", false);

// Make sure URL bar shows exact URL that is sent over the wire
user_pref("browser.urlbar.filter.javascript", true);
user_pref("browser.urlbar.trimURLs", false);
user_pref("network.IDN_show_punycode", true);

// Disable SharedArrayBuffer
user_pref("javascript.options.shared_memory", false);

// First-party isolation
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

// Ensure safe SSL negotiation
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// HSTS
user_pref("network.stricttransportsecurity.preloadlist", true);
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.mixed_content.use_hsts", true);

// HSTS Priming
user_pref("security.mixed_content.send_hsts_priming", false);

// Make sure checkloaduri is enabled
user_pref("security.checkloaduri", true);

// Don't use preloaded URLs to suggest
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// Disable other documents from viewing source
user_pref("security.view-source.reachable-from-inner-protocol", false);

// Make sure not to skip Windows security checks
user_pref("browser.download.manager.skipWinSecurityPolicyChecks", false);

// Notify user of outdated plugins - removed from FF
user_pref("plugins.update.notifyUser", true);

// Display notification when websites offer data for offline use
user_pref("browser.offline-apps.notify", true);

// Don't check that Firefox is default
user_pref("browser.shell.checkDefaultBrowser", false);

// Disable using CSS-suggested fonts
user_pref("browser.display.use_document_fonts", 0);

// Send DNS through SOCKS if using SOCKS
user_pref("network.proxy.socks_remote_dns", true);

// Disable bundled fonts - Android only?
user_pref("gfx.bundled_fonts.enabled", false);
user_pref("gfx.bundled_fonts.force-enabled", false);

// Disable SVG in OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

// Prompt when insecure redirects happen
user_pref("network.http.prompt-temp-redirect", true);

// Block top level data: URI navigations
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);

// Treat data: URIs as their own unique origins
user_pref("security.data_uri.unique_opaque_origin", true);

// Don't force/allow NTLM v1 - less secure
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
user_pref("network.auth.force-generic-ntlm-v1", false);

// Don't force generic NTLM implementation - less secure
user_pref("network.auth.force-generic-ntlm", false);

// Make sure things installed are at least somewhat legit
user_pref("xpinstall.signatures.required", true);
user_pref("xpinstall.whitelist.required", true);

// SSL cipher suites
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_gcm_sha384", true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true);
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_gcm_sha384", true);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);

// Disable bad, outdated, obscure cipher suites
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
user_pref("security.ssl3.rsa_camellia_128_sha", false);
user_pref("security.ssl3.rsa_camellia_256_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_seed_sha", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);

// Block weird MIME mismatches
user_pref("security.block_script_with_wrong_mime", true);
user_pref("security.xcto_nosniff_block_images", true);

// Don't allow plugins to do Firefox-related things
user_pref("security.xpconnect.plugin.unrestricted", false);

// CSP
user_pref("security.csp.enable", true);
user_pref("security.csp.enableStrictDynamic", true);
user_pref("security.csp.experimentalEnabled", true);

// Disable CSP security violation events
user_pref("security.csp.enable_violation_events", false);

// Make sure there is a delay when adding add-ons before Add button is enabled
user_pref("security.dialog_enable_delay", 1000);
user_pref("security.notification_enable_delay", 500);

// Enable sub resource integrity checking
user_pref("security.sri.enable", true);

// Make sure file URIs come from same origin
user_pref("security.fileuri.strict_origin_policy", true);

// Check if password field is on an insecure page
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("security.insecure_field_warning.ignore_local_ip_address", true);
user_pref("security.insecure_password.ui.enabled", true);

// Make sure SSL is secure
user_pref("browser.ssl_override_behavior", 1);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.cert_pinning.process_headers_from_non_builtin_roots", false);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.tls.version.fallback-limit", 3);
user_pref("security.tls.version.max", 4);
user_pref("security.tls.version.min", 3);

// Don't allow privileged content to be loaded into frames of unprivileged parent frames
user_pref("security.allow_chrome_frames_inside_content", false);

// JAR - just don't do it!
user_pref("network.jar.open-unsafe-types", false);
user_pref("network.jar.block-remote-files", true);

// Make sure websocket is secure
user_pref("network.websocket.allowInsecureFromHTTPS", false);
user_pref("network.websocket.auto-follow-http-redirects", false);

// Disable any plugins by default
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);

// Disable Flash NPAPI plugin
user_pref("plugin.state.flash", 0);

// Disable Java NPAPI plugin
user_pref("plugin.state.java", 0);

// Disable Gnome Shell Integration NPAPI plugin
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);

// Never run any plugins automatically
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);

// Make sure flash is blocked
user_pref("plugins.flashBlock.enabled", true);

// Disable plugin scanning
user_pref("plugin.scan.plid.all", false);

// Don't send a DNT header, that's just begging to be tracked
user_pref("privacy.donottrackheader.enabled", false);

// Disable PDFium and leave PDF.js enabled
user_pref("pdfium.enabled", false);
user_pref("pdfjs.disabled", false);

// Disable promise rejection events
user_pref("dom.promise_rejection_events.disabled", true);
user_pref("dom.promise_rejection_events.enabled", false);

// Display control characters as hex boxes
user_pref("layout.css.control-characters.enabled", true);
user_pref("layout.css.control-characters.visible", true);

// Disable visited links highlighting
user_pref("layout.css.visited_links_enabled", false);



//
// Telemetry / Connections / Network
//

// Disable showing rights
user_pref("browser.rights.3.shown", true);

// App updates disabled
user_pref("app.update.enabled", false);
user_pref("app.update.auto", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.url", "");

// Disable all app.update stuff
user_pref("app.update.doorhanger", false);
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);

// Extension updates enabled
user_pref("extensions.update.enabled", true);
user_pref("extensions.update.autoUpdateDefault", true);

// Lightweight theme updates disabled
user_pref("lightweightThemes.update.enabled", false);

// Disable activity stream
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.aboutHome.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.library.activity-stream.enabled", false);

// Disable Firefox's newtabpage features
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.startup.homepage", "");
user_pref("browser.startup.page", 0);
user_pref("startup.homepage_override_url", "");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");

// Disable showing the "what's new" page on upgrades
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Disable remote debugging
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);

// Disable snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "data:text/plain,");

// Disable add-on metadata updating
user_pref("extensions.getAddons.cache.enabled", false);

// Disable heartbeat - removed from FF
user_pref("browser.selfsupport.url", "");

// Disable Photon onboarding
user_pref("browser.onboarding.enabled", false);

// Disable wifi tickling
user_pref("network.tickle-wifi.enabled", false);

// Disable SSDP - removed from FF
user_pref("browser.casting.enabled", false);

// Disable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.crashReporting.requestEmail", false);
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("browser.tabs.crashReporting.email", "");
user_pref("browser.tabs.crashReporting.includeURL", false);

// Disable safebrowsing, talks to Google
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.debug", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);

// Neuter safebrowsing URLs
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// Don't use any Geo stuff
user_pref("browser.search.region", "US");
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

// Disable search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

// Disable updating search engines
user_pref("browser.search.update", false);

// Disable UI tour
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.uitour.requireSecure", true);
user_pref("browser.uitour.themeOrigin", "");

// Disable ping attributes on anchor elements
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.max_per_link", 0);
user_pref("browser.send_pings.require_same_host", true);

// Disable Beacon API
user_pref("beacon.enabled", false);

// Disable FlyWeb
user_pref("dom.flyweb.enabled", false);

// Disable raw TCP sockets
user_pref("dom.mozTCPSocket.enabled", false);

// Disable Firefox Hello - removed from FF
user_pref("loop.enabled", false);

// Disable UDP sockets
user_pref("dom.udpsocket.enabled", false);

// Disable default-installed extensions
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");
user_pref("extensions.webcompat.perform_ua_overrides", false);

// Disable more pocket stuff
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");

// Disable reporting decode issues
user_pref("media.decoder-doctor.new-issue-endpoint", "");

// Disable built-in DRM-y type stuff and corporate codecs
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.gmp-eme-adobe.visible", false);
user_pref("media.gmp-eme-adobe.autoupdate", false);
user_pref("media.gmp.decoder.enabled", false);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-manager.url.override", "");
user_pref("media.gmp-manager.updateEnabled", false);
user_pref("media.gmp.trial-create.enabled", false);
user_pref("media.gmp.insecure.allow", false);

// Disable WMF
user_pref("media.wmf.enabled", false);
user_pref("media.windows-media-foundation.use-nv12-format", false);
user_pref("media.windows-media-foundation.allow-d3d11-dxva", false);

// Disable WebRTC / it leaking your IP address / screen-sharing / audio capture / navigator
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// Has "experiment" in the name
user_pref("network.allow-experiments", false);

// Block resolving .onion domains
user_pref("network.dns.blockDotOnion", true);

// Don't prefetch/preload/predict/speculate anything
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
user_pref("network.preload", false);

// Disable tracking protection, talks to Google
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.trackingprotection.ui.enabled", false);
user_pref("privacy.trackingprotection.introCount", 20);

// OCSP - sends queries to OCSP servers if stapling isn't required
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
user_pref("security.ssl.enable_ocsp_must_staple", true);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.GET.enabled", false);

// Disable SSL error reporting
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

// Make sure blocklist is enabled - sends queries to Mozilla - disable?
user_pref("extensions.blocklist.enabled", true);
user_pref("services.blocklist.signing.enforced", true);
user_pref("services.blocklist.update_enabled", true);

// Disable Mozilla Social API - removed from FF
user_pref("social.enabled", false);
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);

// Disable Mozilla telemetry stuff
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.ping-centre.log", false);
user_pref("browser.ping-centre.production.endpoint", "");
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.activeExperiment", false);
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.first_run", false);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);

// Disable system extension updates, only get system extension updates when Firefox itself is updated
user_pref("extensions.systemAddon.update.url", "");

// Disable Presentation API
user_pref("dom.presentation.enabled", false);
user_pref("dom.presentation.controller.enabled", false);
user_pref("dom.presentation.receiver.enabled", false);
user_pref("dom.presentation.tcp_server.debug", false);
user_pref("dom.presentation.discovery.enabled", false);
user_pref("dom.presentation.discoverable", false);
user_pref("dom.presentation.session_transport.data_channel.enable", false);

// Disable Push API
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

// Disable WebIDE
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false); // removed from FF
user_pref("devtools.webide.adbAddonID", "");
user_pref("devtools.webide.adbAddonURL", "");
user_pref("devtools.webide.autoConnectRuntime", false);
user_pref("devtools.webide.enableLocalRuntime", false);

// Disable spellcheck from downloading dictionaries
user_pref("layout.spellcheckDefault", 0);
user_pref("browser.dictionaries.download.url", "");

// Disable the discover URL for extensions
user_pref("extensions.webservice.discoverURL", "");

// Disable the get-addons tab in about:addons
user_pref("extensions.getAddons.showPane", false);

// Disable translation
user_pref("browser.translation.detectLanguage", false);
user_pref("browser.translation.engine", "");
user_pref("browser.translation.ui.show", false);

// Connects to detectportal.firefox.com at startup
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// Do NOT disable flash protected mode
user_pref("dom.ipc.plugins.flash.disable-protected-mode", false);

// Disable flash crash reporter
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// Disable crash reporter sending URL of where plugin crashed
user_pref("dom.ipc.plugins.reportCrashURL", false);

// Skip first run stuff
user_pref("browser.startup.firstrunSkipsHomepage", true);
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("datareporting.policy.firstRunURL", "");

// Disable identity as much as possible
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.auth.uri", "");
user_pref("identity.fxaccounts.remote.email.uri", "");
user_pref("identity.fxaccounts.remote.force_auth.uri", "");
user_pref("identity.fxaccounts.remote.oauth.uri", "");
user_pref("identity.fxaccounts.remote.profile.uri", "");
user_pref("identity.fxaccounts.remote.signin.uri", "");
user_pref("identity.fxaccounts.remote.signup.uri", "");
user_pref("identity.fxaccounts.remote.webchannel.uri", "");
user_pref("identity.fxaccounts.settings.devices.uri", "");
user_pref("identity.fxaccounts.settings.uri", "");
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");
user_pref("identity.sync.tokenserver.uri", "");

// Disable promo
user_pref("devtools.devedition.promo.enabled", false);
user_pref("devtools.devedition.promo.url", "");
user_pref("devtools.devedition.promo.shown", true);

// Probably a good idea to disable this as much as possible
user_pref("devtools.onboarding.experiment", "off");
user_pref("devtools.onboarding.telemetry.logged", false);



//
// I don't use these features, therefore disable them
//

// Disable webkitBlink stuff - Android, maybe?
user_pref("dom.webkitBlink.dirPicker.enabled", false);
user_pref("dom.webkitBlink.filesystem.enabled", false);

// Disable dialog element
user_pref("dom.dialog_element.enabled", false);

// Disable Web Components
user_pref("dom.webcomponents.enabled", false);
user_pref("dom.webcomponents.customelements.enabled", false);

// Disable canvas as much as possible
user_pref("canvas.hitregions.enabled", false);
user_pref("canvas.capturestream.enabled", false);
user_pref("canvas.filters.enabled", false);
user_pref("canvas.focusring.enabled", false);
user_pref("canvas.customfocusring.enabled", false);
user_pref("canvas.imagebitmap_extensions.enabled", false);
user_pref("canvas.path.enabled", false);

// Disable asm.js
user_pref("javascript.options.asmjs", false);

// Disable WebAssembly
user_pref("javascript.options.wasm", false);
user_pref("javascript.options.wasm_baselinejit", false);
user_pref("javascript.options.wasm_ionjit", false);

// Disable MathML
user_pref("mathml.disabled", true);

// Disable Full Screen API
user_pref("full-screen-api.enabled", false);

// Disable archive reader - removed from FF
user_pref("dom.archivereader.enabled", false);

// Disable requestIdleCallback API
user_pref("dom.requestIdleCallback.enabled", false);

// Accessibility
user_pref("accessibility.force_disabled", 1);
user_pref("ui.osk.enabled", false);

// Disable Directory API
user_pref("dom.input.dirpicker", false);

// Disable File Handle API (non-standard Firefox web API)
user_pref("dom.fileHandle.enabled", false);

// Disable Streams API
user_pref("javascript.options.streams", false);
user_pref("dom.streams.enabled", false);

// Disable ImageCapture API
user_pref("dom.imagecapture.enabled", false);

// Disable MediaDevices devicechange events
user_pref("media.ondevicechange.enabled", false);
user_pref("media.ondevicechange.fakeDeviceChangeEvent.enabled", false);

// Disable OffScreenCanvas
user_pref("gfx.offscreencanvas.enabled", false);

// Disable Wakelock API
user_pref("dom.wakelock.enabled", false);

// Disable Secure Element API
user_pref("dom.secureelement.enabled", false);

// Disable Mozilla AudioChannel APIs
user_pref("media.useAudioChannelAPI", false);

// Disable Request.context
user_pref("dom.requestcontext.enabled", false);

// Disable module scripts
user_pref("dom.moduleScripts.enabled", false);

// Disable payment requests
user_pref("dom.payments.request.enabled", false);

// Disable SkyNet technology
user_pref("media.webspeech.recognition.enable", false);
user_pref("camera.control.face_detection.enabled", false);

// Disable Vibration API
user_pref("dom.vibrator.enabled", false);

// Disable VR API
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.autoactivate.enabled", false);
user_pref("dom.vr.test.enabled", false);

// Disable Web Audio API
user_pref("dom.webaudio.enabled", false);

// Disable Notifications API
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Might be related to notifications API? Disable either way
user_pref("notification.feature.enabled", false);

// Disable legacy extensions
user_pref("extensions.legacy.enabled", false);

// Disable miscellaneous Web APIs
user_pref("dom.IntersectionObserver.enabled", false);
user_pref("dom.abortController.enabled", false);
user_pref("dom.abortController.fetch.enabled", false);
user_pref("dom.idle-observers-api.enabled", false);
user_pref("dom.idle-observers-api.fuzz_time.disabled", true);
user_pref("dom.permissions.revoke.enable", false);
user_pref("dom.sysmsg.enabled", false);

// Disable WebAuth
user_pref("security.webauth.u2f", false);
user_pref("security.webauth.webauthn", false);
user_pref("security.webauth.webauthn_enable_softtoken", false);
user_pref("security.webauth.webauthn_enable_usbtoken", false);

// Stagefright? What is this, Android? Disable anyway.
user_pref("stagefright.disabled", true);
user_pref("stagefright.force-enabled", false);

// Don't use spatial navigation
user_pref("snav.enabled", false);

// Disable Battery API - removed from FF
user_pref("dom.battery.enabled", false);

// Disable dispatching keyboard events during composition
user_pref("dom.keyboardevent.dispatch_during_composition", false);

// Disable this just because it has "experimental" in the name
user_pref("dom.experimental_forms", false);

// Get rid of this
user_pref("manifest.install.enabled", false);

// Disable Telephony API - removed from FF
user_pref("dom.telephony.enabled", false);

// Disable Shumway - removed from FF
user_pref("shumway.disabled", true);

// Narrate relies on speech synth - Firefox feature used in Reader mode
user_pref("narrate.enabled", false);
user_pref("narrate.test", false);

// Disable large allocation header
user_pref("dom.largeAllocationHeader.enabled", false);

// Disable mapped arraybuffer
user_pref("dom.mapped_arraybuffer.enabled", false);

// Disable because it has wifi in the name
user_pref("devtools.remote.wifi.scan", false);
user_pref("devtools.remote.wifi.visible", false);

// Neuter content handlers
user_pref("browser.contentHandlers.types.0.title", "");
user_pref("browser.contentHandlers.types.0.type", "");
user_pref("browser.contentHandlers.types.0.uri", "");
user_pref("browser.contentHandlers.types.1.title", "");
user_pref("browser.contentHandlers.types.1.type", "");
user_pref("browser.contentHandlers.types.1.uri", "");
user_pref("browser.contentHandlers.types.2.title", "");
user_pref("browser.contentHandlers.types.2.type", "");
user_pref("browser.contentHandlers.types.2.uri", "");
user_pref("browser.contentHandlers.types.3.title", "");
user_pref("browser.contentHandlers.types.3.type", "");
user_pref("browser.contentHandlers.types.3.uri", "");
user_pref("browser.contentHandlers.types.4.title", "");
user_pref("browser.contentHandlers.types.4.type", "");
user_pref("browser.contentHandlers.types.4.uri", "");
user_pref("browser.contentHandlers.types.5.title", "");
user_pref("browser.contentHandlers.types.5.type", "");
user_pref("browser.contentHandlers.types.5.uri", "");

// Neuter browser search
user_pref("browser.search.order.1", "");
user_pref("browser.search.order.2", "");
user_pref("browser.search.order.3", "");
user_pref("browser.search.order.US.1", "");
user_pref("browser.search.order.US.2", "");
user_pref("browser.search.order.US.3", "");

// Neuter gecko handler services
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.1.name", "");
user_pref("gecko.handlerService.schemes.irc.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.2.name", "");
user_pref("gecko.handlerService.schemes.irc.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.3.name", "");
user_pref("gecko.handlerService.schemes.irc.3.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.1.name", "");
user_pref("gecko.handlerService.schemes.ircs.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.2.name", "");
user_pref("gecko.handlerService.schemes.ircs.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.3.name", "");
user_pref("gecko.handlerService.schemes.ircs.3.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.2.name", "");
user_pref("gecko.handlerService.schemes.mailto.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.3.name", "");
user_pref("gecko.handlerService.schemes.mailto.3.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.0.name", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.1.name", "");
user_pref("gecko.handlerService.schemes.webcal.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.2.name", "");
user_pref("gecko.handlerService.schemes.webcal.2.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.3.name", "");
user_pref("gecko.handlerService.schemes.webcal.3.uriTemplate", "");

// Neuter network protocol handlers
user_pref("network.protocol-handler.expose-all", false);
user_pref("network.protocol-handler.expose.all", false);
user_pref("network.protocol-handler.expose-default", false);
user_pref("network.protocol-handler.expose.default", false);
user_pref("network.protocol-handler.expose.about", true);
user_pref("network.protocol-handler.expose.afp", false);
user_pref("network.protocol-handler.expose.blob", true);
user_pref("network.protocol-handler.expose.chrome", true);
user_pref("network.protocol-handler.expose.data", true);
user_pref("network.protocol-handler.expose.disk", false);
user_pref("network.protocol-handler.expose.disks", false);
user_pref("network.protocol-handler.expose.ftp", true);
user_pref("network.protocol-handler.expose.file", true);
user_pref("network.protocol-handler.expose.hcp", false);
user_pref("network.protocol-handler.expose.http", true);
user_pref("network.protocol-handler.expose.https", true);
user_pref("network.protocol-handler.expose.ile", false);
user_pref("network.protocol-handler.expose.javascript", true);
user_pref("network.protocol-handler.expose.le", false);
user_pref("network.protocol-handler.expose.mailto", false);
user_pref("network.protocol-handler.expose.moz-icon", false);
user_pref("network.protocol-handler.expose.moz-extension", true);
user_pref("network.protocol-handler.expose.ms-help", false);
user_pref("network.protocol-handler.expose.ms-windows-store", false);
user_pref("network.protocol-handler.expose.news", false);
user_pref("network.protocol-handler.expose.nntp", false);
user_pref("network.protocol-handler.expose.ps", false);
user_pref("network.protocol-handler.expose.resource", false);
user_pref("network.protocol-handler.expose.shell", false);
user_pref("network.protocol-handler.expose.snews", false);
user_pref("network.protocol-handler.expose.tps", false);
user_pref("network.protocol-handler.expose.ttp", false);
user_pref("network.protocol-handler.expose.ttps", false);
user_pref("network.protocol-handler.expose.vbscript", false);
user_pref("network.protocol-handler.expose.view-source", false);
user_pref("network.protocol-handler.expose.vnd.ms.radio", false);

// Don't allow any external handlers
user_pref("network.protocol-handler.external-all", false);
user_pref("network.protocol-handler.external.all", false);
user_pref("network.protocol-handler.external-default", false);
user_pref("network.protocol-handler.external.default", false);
user_pref("network.protocol-handler.external.about", false);
user_pref("network.protocol-handler.external.afp", false);
user_pref("network.protocol-handler.external.blob", false);
user_pref("network.protocol-handler.external.chrome", false);
user_pref("network.protocol-handler.external.data", false);
user_pref("network.protocol-handler.external.disk", false);
user_pref("network.protocol-handler.external.disks", false);
user_pref("network.protocol-handler.external.ftp", false);
user_pref("network.protocol-handler.external.file", false);
user_pref("network.protocol-handler.external.hcp", false);
user_pref("network.protocol-handler.external.http", false);
user_pref("network.protocol-handler.external.https", false);
user_pref("network.protocol-handler.external.ile", false);
user_pref("network.protocol-handler.external.javascript", false);
user_pref("network.protocol-handler.external.le", false);
user_pref("network.protocol-handler.external.mailto", false);
user_pref("network.protocol-handler.external.moz-icon", false);
user_pref("network.protocol-handler.external.moz-extension", false);
user_pref("network.protocol-handler.external.ms-help", false);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("network.protocol-handler.external.news", false);
user_pref("network.protocol-handler.external.nntp", false);
user_pref("network.protocol-handler.external.ps", false);
user_pref("network.protocol-handler.external.resource", false);
user_pref("network.protocol-handler.external.shell", false);
user_pref("network.protocol-handler.external.snews", false);
user_pref("network.protocol-handler.external.tps", false);
user_pref("network.protocol-handler.external.ttp", false);
user_pref("network.protocol-handler.external.ttps", false);
user_pref("network.protocol-handler.external.vbscript", false);
user_pref("network.protocol-handler.external.view-source", false);
user_pref("network.protocol-handler.external.vnd.ms.radio", false);

// Always warn before opening external application / handling some other protocol
user_pref("network.protocol-handler.warn-external-default", true);
user_pref("network.protocol-handler.warn-external.default", true);
user_pref("network.protocol-handler.warn-external-all", true);
user_pref("network.protocol-handler.warn-external.all", true);
user_pref("network.protocol-handler.warn-external.about", true);
user_pref("network.protocol-handler.warn-external.afp", true);
user_pref("network.protocol-handler.warn-external.blob", true);
user_pref("network.protocol-handler.warn-external.chrome", true);
user_pref("network.protocol-handler.warn-external.data", true);
user_pref("network.protocol-handler.warn-external.disk", true);
user_pref("network.protocol-handler.warn-external.disks", true);
user_pref("network.protocol-handler.warn-external.ftp", true);
user_pref("network.protocol-handler.warn-external.file", true);
user_pref("network.protocol-handler.warn-external.hcp", true);
user_pref("network.protocol-handler.warn-external.http", true);
user_pref("network.protocol-handler.warn-external.https", true);
user_pref("network.protocol-handler.warn-external.ile", true);
user_pref("network.protocol-handler.warn-external.javascript", true);
user_pref("network.protocol-handler.warn-external.le", true);
user_pref("network.protocol-handler.warn-external.mailto", true);
user_pref("network.protocol-handler.warn-external.moz-icon", true);
user_pref("network.protocol-handler.warn-external.moz-extension", true);
user_pref("network.protocol-handler.warn-external.ms-help", true);
user_pref("network.protocol-handler.warn-external.ms-windows-store", true);
user_pref("network.protocol-handler.warn-external.news", true);
user_pref("network.protocol-handler.warn-external.nntp", true);
user_pref("network.protocol-handler.warn-external.ps", true);
user_pref("network.protocol-handler.warn-external.resource", true);
user_pref("network.protocol-handler.warn-external.shell", true);
user_pref("network.protocol-handler.warn-external.snews", true);
user_pref("network.protocol-handler.warn-external.tps", true);
user_pref("network.protocol-handler.warn-external.ttp", true);
user_pref("network.protocol-handler.warn-external.ttps", true);
user_pref("network.protocol-handler.warn-external.vbscript", true);
user_pref("network.protocol-handler.warn-external.view-source", true);
user_pref("network.protocol-handler.warn-external.vnd.ms.radio", true);

// Always ask for these things
user_pref("browser.feeds.handler", "ask");
user_pref("browser.videoFeeds.handler", "ask");
user_pref("browser.audioFeeds.handler", "ask");
user_pref("browser.helperApps.alwaysAsk.force", true);
user_pref("browser.helperApps.neverAsk.openFile", "");
user_pref("browser.helperApps.neverAsk.saveToDisk", "");

// Disable using external editor for source
user_pref("view_source.editor.external", false);
user_pref("view_source.editor.path", "");
user_pref("view_source.editor.args", "");

// Neuter search related settings
user_pref("browser.search.defaultenginename", "");
user_pref("browser.search.defaultenginename.US", "");
user_pref("browser.search.searchEnginesURL", "");

// Disable search logging
user_pref("browser.search.log", false);



//
// Always last
//

// Disable WebGL
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.force-enabled", false);
user_pref("webgl.disabled", true);
