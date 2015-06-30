require('shelljs/global');

rm('-rf', '~/Dropbox/Public/SDShare/council_report_show.pdf');
exec('gitbook pdf . ~/Dropbox/Public/SDShare/council_report_show.pdf');
