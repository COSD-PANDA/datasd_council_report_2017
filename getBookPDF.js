require('shelljs/global');

rm('-rf', '~/Dropbox/Public/SDShare/council_report_show.pdf');
exec('gitbook pdf . ~/Dropbox/Public/SDShare/council_report_show.pdf --gitbook=2.1.0-mrm');
