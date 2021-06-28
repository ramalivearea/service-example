export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { oms },
  } = ctx

   //const data = await catalog.getSkuById(code.toString())
   //const data = await catalog.seller("1")

  console.log("%%%%%%%%%%%%"+oms.order("1139741935562-01"))
  
  const data = await oms.order(code.toString())

  ctx.body = data

  await next()
}