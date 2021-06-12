---
draft: true
title: "{{- replace .Name "-" " " | title -}}"
date: {{ .Date }}
description: ""
{{- $type := "project" -}}
{{- $header := "Pages" -}}
{{- $section := replaceRE "/.*content/([^/]+).*" "$1" .File.Dir -}}
{{- if eq $section "portfolios" -}}
  {{- $type = "portfolio" -}}
  {{- $header = "Projects" -}}
{{- end }}
type: {{ $type }}
header: {{ $header }}
---

Lorem ipsum dolor sit amet, `consectetur` adipiscing elit. Proin eget bibendum dui, sed posuere mauris. "Duis auctor dolor et rhoncus maximus." Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis [egestas](/demo). Aenean nec nisi{{<sidenote 2102150831>}}Nulla at dictum tellus. Vivamus lorem felis, [egestas](/demo) ac porta vitae, feugiat non nisi.{{</sidenote>}} dui. Curabitur lacus justo, porta sed elementum sit amet, suscipit at dolor. Nulla porttitor nulla tortor, efficitur sagittis dolor ultrices facilisis.

##### {{ $header }} {.bigger}

{{ if eq $type "project" -}}
{{<listprojectpages>}}
{{- else -}}
{{<listprojects>}}
{{- end -}}
