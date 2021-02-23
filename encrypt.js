// 小代哥哥给大家送福利  代码已混淆加密 哈哈哈哈~~~~~~~~

/*
 *   var sha = yh_sha1('password 123') console.log(sha)
 */
;
eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('7 N=0;7 O="";7 p=8;o P(s){n F(v(z(s),s.q*p))}o 10(s){n G(v(z(s),s.q*p))}o 11(s){n H(v(z(s),s.q*p))}o 12(a,b){n F(D(a,b))}o 13(a,b){n G(D(a,b))}o 17(a,b){n H(D(a,b))}o 18(){n P("19")=="1a"}o v(x,f){x[f>>5]|=1b<<(I-(f%A));x[(((f+1c)>>9)<<4)+15]=f;7 w=C(Q);7 a=1d;7 b=-1e;7 c=-1f;7 d=1g;7 e=-1h;u(7 i=0;i<x.q;i+=16){7 g=a;7 h=b;7 k=c;7 l=d;7 m=e;u(7 j=0;j<Q;j++){B(j<16)w[j]=x[i+j];R w[j]=E(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);7 t=r(r(E(a,5),S(j,b,c,d)),r(r(e,w[j]),T(j)));e=d;d=c;c=E(b,1i);b=a;a=t}a=r(a,g);b=r(b,h);c=r(c,k);d=r(d,l);e=r(e,m)}n C(a,b,c,d,e)}o S(t,b,c,d){B(t<U)n(b&c)|(~b&d);B(t<V)n b^c^d;B(t<W)n(b&c)|(b&d)|(c&d);n b^c^d}o T(t){n t<U?1j:t<V?1k:t<W?-1l:-1m}o D(a,b){7 c=z(a);B(c.q>16)c=v(c,a.q*p);7 d=C(16),J=C(16);u(7 i=0;i<16;i++){d[i]=c[i]^1n;J[i]=c[i]^1o}7 e=v(d.X(z(b)),Y+b.q*p);n v(J.X(e),Y+1p)}o r(x,y){7 a=(x&K)+(y&K);7 b=(x>>16)+(y>>16)+(a>>16);n(b<<16)|(a&K)}o E(a,b){n(a<<b)|(a>>>(A-b))}o z(a){7 b=C();7 c=(1<<p)-1;u(7 i=0;i<a.q*p;i+=p)b[i>>5]|=(a.1q(i/p)&c)<<(I-(i%A));n b}o H(a){7 b="";7 c=(1<<p)-1;u(7 i=0;i<a.q*A;i+=p)b+=1r.1s((a[i>>5]>>>(I-(i%A)))&c);n b}o F(a){7 b=N?"1t":"1u";7 c="";u(7 i=0;i<a.q*4;i++){c+=b.L((a[i>>2]>>((3-(i%4))*8+4))&Z)+b.L((a[i>>2]>>((3-(i%4))*8))&Z)}n c}o G(a){7 b="1v+/";7 c="";u(7 i=0;i<a.q*4;i+=3){7 d=(((a[i>>2]>>(8*(3-(i%4))))&M)<<16)|(((a[(i+1)>>2]>>(8*(3-((i+1)%4))))&M)<<8)|((a[(i+2)>>2]>>(8*(3-((i+2)%4))))&M);u(7 j=0;j<4;j++){B(i*8+j*6>a.q*A)c+=O;R c+=b.L((d>>(6*(3-j)))&1w)}}n c}', 62, 95, '|||||||var||||||||||||||||return|function|chrsz|length|safe_add|||for|core_sha1||||str2binb|32|if|Array|core_hmac_sha1|rol|binb2hex|binb2b64|binb2str|24|opad|0xffff|charAt|0xff|hexcase|b64pad|yh_sha1|80|else|sha1_ft|sha1_kt|20|40|60|concat|512|0xf|b64_sha1|str_sha1|hex_hmac_sha1|b64_hmac_sha1||||str_hmac_sha1|sha1_vm_test|abc|a9993e364706816aba3e25717850c26c9cd0d89d|0x80|64|1732584193|271733879|1732584194|271733878|1009589776|30|1518500249|1859775393|1894007588|899497514|0x36363636|0x5c5c5c5c|160|charCodeAt|String|fromCharCode|0123456789ABCDEF|0123456789abcdef|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|0x3f'.split('|'), 0, {}));