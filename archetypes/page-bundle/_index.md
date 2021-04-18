---
draft: true
title: "{{- replace .Name "-" " " | title -}}"
date: {{ .Date }}
description: ""
{{ $section := replaceRE "/.*content/([^/]+).*" "$1" .File.Dir -}}
{{- $mainSections := slice "blog" -}}
{{- range $k, $v := $.Site.Taxonomies -}}{{ $mainSections = $mainSections | append $k -}}{{ end -}}
{{- if not (in $mainSections $section) -}}
weight: {{ range last 1 (where .Site.RegularPages "Section" $section) -}}{{ add .Page.Weight 100 -}}{{ else -}}100{{ end -}}
toc: true
{{- end }}
---

Lorem ipsum dolor sit amet, `consectetur` adipiscing elit. Proin eget bibendum dui, sed posuere mauris. "Duis auctor dolor et rhoncus maximus." Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis [egestas](/demo). Aenean nec nisi{{<sidenote 2102150831>}}Nulla at dictum tellus. Vivamus lorem felis, [egestas](/demo) ac porta vitae, feugiat non nisi.{{</sidenote>}} dui. Curabitur lacus justo, porta sed elementum sit amet, suscipit at dolor. Nulla porttitor nulla tortor, efficitur sagittis dolor ultrices facilisis.

