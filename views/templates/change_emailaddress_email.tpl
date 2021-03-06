subject: Confirm your new email
body:
Hi {{ .name }},
<br /><br />
Looks like you have requested to change your email from {{ .oldEmail }} to {{ .newEmail }}.
<br />
Click the link below to confirm this operation.
<br /><br />
{{ .link }}
<br /><br />
<span style="color:#666;font-size:11px">This link will expire in 24 hours and can only be used once.</span>