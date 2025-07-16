const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

const stockRegex = /(?:^|\s)[s5][t7][o0][c\{\[\(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;
const prizeRegex = /(?:^|\s)w[i1|]n pr[i1|]z[e3](?:$|\s)/i;
const clickRegex = /(?:^|\s)cl[i1|]ck h[e3]r[e3](?:$|\s)/i;
const urgentRegex = /(?:^|\s)urg[e3]nt r[e3]sp[o0]ns[e3](?:$|\s)/i;
const cheapRegex = /(?:^|\s)ch[e3][a@4]p d[e3][a@4]l(?:$|\s)/i;
const bonusRegex = /(?:^|\s)b[o0]nus(?:$|\s)/i;
