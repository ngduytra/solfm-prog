import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolfmProg } from "../target/types/solfm_prog";

describe("solfm-prog", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolfmProg as Program<SolfmProg>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
