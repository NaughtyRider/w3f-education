"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[7130],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8401:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"workshop",sidebar_position:1},l="Innovating with Substrate FRAME",u={unversionedId:"Substrate/workshop",id:"Substrate/workshop",isDocsHomePage:!1,title:"Innovating with Substrate FRAME",description:"Substrate is a modular framework that enables you to create purpose-built blockchains by composing custom or pre-built components. The Framework for Runtime Aggregation of Modularized Entities (FRAME) is a set of modules and support libraries that simplify runtime development. In Substrate, these modules are called Pallets, each hosting domain-specific logic to include in a chain's runtime.",source:"@site/docs/Substrate/substrate-workshop.md",sourceDirName:"Substrate",slug:"/Substrate/workshop",permalink:"/w3f-education/docs/Substrate/workshop",editUrl:"https://github.com/w3f/w3f-education/edit/main/docs/Substrate/substrate-workshop.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1646644142,formattedLastUpdatedAt:"3/7/2022",sidebarPosition:1,frontMatter:{id:"workshop",sidebar_position:1},sidebar:"substrate",previous:{title:"Introduction to Substrate",permalink:"/w3f-education/docs/introsubstrate"}},p=[{value:"Substrate Template Node",id:"substrate-template-node",children:[{value:"Substrate Playground",id:"substrate-playground",children:[]}]},{value:"Running a Multi-Node Blockchain (<em>Skip this during the live session</em>)",id:"running-a-multi-node-blockchain-skip-this-during-the-live-session",children:[]},{value:"Innovating with FRAME on substrate",id:"innovating-with-frame-on-substrate",children:[]}],c={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"innovating-with-substrate-frame"},"Innovating with Substrate FRAME"),(0,r.kt)("p",null,"Substrate is a modular framework that enables you to create purpose-built blockchains by composing custom or pre-built components. The Framework for Runtime Aggregation of Modularized Entities (FRAME) is a set of modules and support libraries that simplify runtime development. In Substrate, these modules are called Pallets, each hosting domain-specific logic to include in a chain's runtime."),(0,r.kt)("p",null,"In order to get the most out of Substrate, you should have a good knowledge of computer science and basic blockchain concepts. Terminology like header, block, client, hash, transaction and signature should be familiar. Substrate is built on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust Programming language"),", which makes use of novel design patterns to enable development of code that is safe and fast. Although you don't need to know Rust to get started with Substrate, a good understanding of Rust will allow you to become a better Substrate developer."),(0,r.kt)("p",null,"In this workshop, you will get a glimpse of the modularity and flexibility Substrate offers for developers!"),(0,r.kt)("h2",{id:"substrate-template-node"},"Substrate Template Node"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"A fresh FRAME-based Substrate node, ready for hacking")),(0,r.kt)("h3",{id:"substrate-playground"},"Substrate Playground"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create an account on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),". If you already have an account, just login.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Follow the signup instructions on ",(0,r.kt)("a",{parentName:"p",href:"https://playground.substrate.dev/"},"Substrate Playground"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not click on any template yet! Check out the overview of all the templates provided")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the Substrate Node Template, observe the blockchain node in action and wait for the rest of the participants to catch up with you"))),(0,r.kt)("p",null,"By default, the node template is initialized with this command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./target/debug/node-template --dev --ws-external\n")),(0,r.kt)("p",null,"You can interact with the node using Polkadot JS by clicking on Playground -> Open Polkadot JS Apps"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus",src:n(5811).Z})),(0,r.kt)("p",null,"If Substrate Playground crashes or has issues with the load balancing multiple sessions, here are the instructions on setting up Substrate Development environment on your machine - ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/create-your-first-substrate-chain"},"Create your first Substrate chain")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"It is recommended that you setup the local development environment after the workshop session")),(0,r.kt)("h2",{id:"running-a-multi-node-blockchain-skip-this-during-the-live-session"},"Running a Multi-Node Blockchain (",(0,r.kt)("em",{parentName:"h2"},"Skip this during the live session"),")"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Skip this section during the workshop as it takes a lot of time compile the node from scratch. You can try this later")),(0,r.kt)("p",null,"After successfully starting the substrate node template, press CTRL + C on the terminal to stop the execution of the node. Remove the previously built artifacts by running the below command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo clean\n")),(0,r.kt)("p",null,"Now, run an instance of Local Testnet that allows you to run a Validator Node. This will take a while as Rust compiles the entire node from scratch. Observe the command prompt to see all the libraries that make a node template work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo run -- --base-path data/node1 --chain local --alice  --name radha --validator\n")),(0,r.kt)("p",null,"Open a new terminal (At the top of the page, click on Terminal). Here, we will run another instance of the node. As we are running on the same machine, we will supply different ports for networking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo run -- --base-path data/node2 --chain local --bob  --port 30334 --ws-port 9945 --name dasari --validator\n")),(0,r.kt)("p",null,"If everything goes well, you should be able to see a multi-node blockchain in action!"),(0,r.kt)("h2",{id:"innovating-with-frame-on-substrate"},"Innovating with FRAME on substrate"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Main focus of this workshop")),(0,r.kt)("p",null,"Let us add some nick names to the accounts on-chain! We will be following the instructions from the tutorial below to see what it takes to add nicks pallet to the blockchain runtime"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/add-a-pallet"},"Add a pallet to Substrate")," - highly recommended to read this thoroughly after the workshop."),(0,r.kt)("p",null,"To make it easy for you during the workshop session, the code updates you need to make are given below"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime/Cargo.toml")," add the code below. Make sure you update the tag to match the other dependencies listed in the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[dependencies.pallet-nicks]\ndefault-features = false\ngit = 'https://github.com/paritytech/substrate.git'\ntag = 'monthly-YYYY-MM'\nversion = '4.0.0-dev'\n")),(0,r.kt)("p",null,"Scroll down in ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime/Cargo.toml")," and add this line of code ",(0,r.kt)("inlineCode",{parentName:"p"},"'pallet-nicks/std',")," in the features code block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[features]\ndefault = [\"std\"]\nstd = [\n  #--snip--\n  'pallet-nicks/std',\n  #--snip--\n  ]\n")),(0,r.kt)("p",null,"Before moving on, check that the new dependencies resolve correctly by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo check -p node-template-runtime\n")),(0,r.kt)("p",null,"Now, we will move to the runtime ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," file."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime/src/lib.rs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/// Add this code block to your template for Nicks right below the implementation of pallet_balances:\nparameter_types! {\n  // Choose a fee that incentivizes desireable behavior.\n  pub const NickReservationFee: u128 = 100;\n  pub const MinNickLength: u32 = 8;\n  // Maximum bounds on storage are important to secure your chain.\n  pub const MaxNickLength: u32 = 32;\n}\n\nimpl pallet_nicks::Config for Runtime {\n  // The Balances pallet implements the ReservableCurrency trait.\n  // `Balances` is defined in `construct_runtimes!` macro. See below.\n  // /rustdocs/latest/pallet_balances/index.html#implementations-2\n  type Currency = Balances;\n\n  // Use the NickReservationFee from the parameter_types block.\n  type ReservationFee = NickReservationFee;\n\n  // No action is taken when deposits are forfeited.\n  type Slashed = ();\n\n  // Configure the FRAME System Root origin as the Nick pallet admin.\n  // /rustdocs/latest/frame_system/enum.RawOrigin.html#variant.Root\n  type ForceOrigin = frame_system::EnsureRoot<AccountId>;\n\n  // Use the MinNickLength from the parameter_types block.\n  type MinLength = MinNickLength;\n\n  // Use the MaxNickLength from the parameter_types block.\n  type MaxLength = MaxNickLength;\n\n  // The ubiquitous event type.\n  type Event = Event;\n}\n")),(0,r.kt)("p",null,"Then we can add Nicks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"construct_runtime!")," Macro in the same file. You just need to add this one line ",(0,r.kt)("inlineCode",{parentName:"p"},"Nicks: pallet_nicks::{Pallet, Call, Storage, Event<T>},")," in the location specified below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"construct_runtime!(\n  pub enum Runtime where\n      Block = Block,\n      NodeBlock = opaque::Block,\n      UncheckedExtrinsic = UncheckedExtrinsic\n      {\n        /* --snip-- */\n        Balances: pallet_balances::{Pallet, Call, Storage, Config<T>, Event<T>},\n\n        /*** Add This Line ***/\n        Nicks: pallet_nicks::{Pallet, Call, Storage, Event<T>},\n      }\n      );\n")),(0,r.kt)("p",null,"Compile the node in release mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo build --release\n")),(0,r.kt)("p",null,"After the build succeeds, you can start the node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Run a temporary node in development mode\n./target/release/node-template --dev --tmp --ws-external\n")),(0,r.kt)("p",null,"Now, navigate to the menu items at the top. click on Playground -> Open Polkadot JS Apps. You should now be able to access all the functionalities offered by Nicks pallet. Go to developer -> extrinsics and test it out"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus",src:n(8126).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus",src:n(1358).Z})))}d.isMDXComponent=!0},5811:function(e,t,n){t.Z=n.p+"assets/images/playground1-b438d2c1a3c14321dbd348310f3de391.png"},8126:function(e,t,n){t.Z=n.p+"assets/images/sub0workshop2-aeedef7464bee3b7a7587795c7e936b7.png"},1358:function(e,t,n){t.Z=n.p+"assets/images/sub0workshop3-0db8c8a302fd9ba6db5a85e6b4d90c05.png"}}]);